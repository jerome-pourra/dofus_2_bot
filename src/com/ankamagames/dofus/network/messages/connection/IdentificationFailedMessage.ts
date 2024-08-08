import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class IdentificationFailedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4567;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public reason: number = 99;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return IdentificationFailedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return IdentificationFailedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return IdentificationFailedMessage.endpointServer;
    }

    public initIdentificationFailedMessage(reason: number = 99): IdentificationFailedMessage
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
        this.serializeAs_IdentificationFailedMessage(output);
    }

    public serializeAs_IdentificationFailedMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.reason);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IdentificationFailedMessage(input);
    }

    private deserializeAs_IdentificationFailedMessage(input: ICustomDataInput)
    {
        this._reasonFunc(input);
    }

    private _reasonFunc(input: ICustomDataInput)
    {
        this.reason = input.readByte();
        if(this.reason < 0)
        {
            throw new Error("Forbidden value (" + this.reason + ") on element of IdentificationFailedMessage.reason.");
        }
    }

}