import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceCreationResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7302;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public result: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceCreationResultMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceCreationResultMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceCreationResultMessage.endpointServer;
    }

    public initAllianceCreationResultMessage(result: number = 0): AllianceCreationResultMessage
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
        this.serializeAs_AllianceCreationResultMessage(output);
    }

    public serializeAs_AllianceCreationResultMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.result);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceCreationResultMessage(input);
    }

    private deserializeAs_AllianceCreationResultMessage(input: ICustomDataInput)
    {
        this._resultFunc(input);
    }

    private _resultFunc(input: ICustomDataInput)
    {
        this.result = input.readByte();
        if(this.result < 0)
        {
            throw new Error("Forbidden value (" + this.result + ") on element of AllianceCreationResultMessage.result.");
        }
    }

}