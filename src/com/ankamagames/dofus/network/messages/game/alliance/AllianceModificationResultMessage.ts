import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceModificationResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3693;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public result: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceModificationResultMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceModificationResultMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceModificationResultMessage.endpointServer;
    }

    public initAllianceModificationResultMessage(result: number = 0): AllianceModificationResultMessage
    {
        this.result = result;
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
        this.serializeAs_AllianceModificationResultMessage(output);
    }

    public serializeAs_AllianceModificationResultMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.result);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceModificationResultMessage(input);
    }

    private deserializeAs_AllianceModificationResultMessage(input: ICustomDataInput)
    {
        this._resultFunc(input);
    }

    private _resultFunc(input: ICustomDataInput)
    {
        this.result = input.readByte();
        if(this.result < 0)
        {
            throw new Error("Forbidden value (" + this.result + ") on element of AllianceModificationResultMessage.result.");
        }
    }

}