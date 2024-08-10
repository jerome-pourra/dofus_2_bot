import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountDataErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2483;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public reason: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountDataErrorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MountDataErrorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MountDataErrorMessage.endpointServer;
    }

    public initMountDataErrorMessage(reason: number = 0): MountDataErrorMessage
    {
        this.reason = reason;
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
        this.serializeAs_MountDataErrorMessage(output);
    }

    public serializeAs_MountDataErrorMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.reason);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountDataErrorMessage(input);
    }

    private deserializeAs_MountDataErrorMessage(input: ICustomDataInput)
    {
        this._reasonFunc(input);
    }

    private _reasonFunc(input: ICustomDataInput)
    {
        this.reason = input.readByte();
        if(this.reason < 0)
        {
            throw new Error("Forbidden value (" + this.reason + ") on element of MountDataErrorMessage.reason.");
        }
    }

}