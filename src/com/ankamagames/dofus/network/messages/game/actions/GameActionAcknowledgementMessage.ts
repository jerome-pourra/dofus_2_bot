import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameActionAcknowledgementMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5751;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public valid: boolean = false;
	public actionId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionAcknowledgementMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionAcknowledgementMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionAcknowledgementMessage.endpointServer;
    }

    public initGameActionAcknowledgementMessage(valid: boolean = false, actionId: number = 0): GameActionAcknowledgementMessage
    {
        this.valid = valid;
        this.actionId = actionId;
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
        this.serializeAs_GameActionAcknowledgementMessage(output);
    }

    public serializeAs_GameActionAcknowledgementMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.valid);
        output.writeByte(this.actionId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionAcknowledgementMessage(input);
    }

    private deserializeAs_GameActionAcknowledgementMessage(input: ICustomDataInput)
    {
        this._validFunc(input);
        this._actionIdFunc(input);
    }

    private _validFunc(input: ICustomDataInput)
    {
        this.valid = input.readBoolean();
    }

    private _actionIdFunc(input: ICustomDataInput)
    {
        this.actionId = input.readByte();
    }

}