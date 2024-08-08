import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountXpRatioMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9050;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public ratio: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountXpRatioMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MountXpRatioMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MountXpRatioMessage.endpointServer;
    }

    public initMountXpRatioMessage(ratio: number = 0): MountXpRatioMessage
    {
        this.ratio = ratio;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_MountXpRatioMessage(output);
    }

    public serializeAs_MountXpRatioMessage(output: ICustomDataOutput)
    {
        if(this.ratio < 0)
        {
            throw new Error("Forbidden value (" + this.ratio + ") on element ratio.");
        }
        output.writeByte(this.ratio);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountXpRatioMessage(input);
    }

    private deserializeAs_MountXpRatioMessage(input: ICustomDataInput)
    {
        this._ratioFunc(input);
    }

    private _ratioFunc(input: ICustomDataInput)
    {
        this.ratio = input.readByte();
        if(this.ratio < 0)
        {
            throw new Error("Forbidden value (" + this.ratio + ") on element of MountXpRatioMessage.ratio.");
        }
    }

}