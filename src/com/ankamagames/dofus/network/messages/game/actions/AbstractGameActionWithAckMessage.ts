import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { AbstractGameActionMessage } from "./AbstractGameActionMessage";

export class AbstractGameActionWithAckMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1587;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public waitAckId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AbstractGameActionWithAckMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AbstractGameActionWithAckMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AbstractGameActionWithAckMessage.endpointServer;
    }

    public initAbstractGameActionWithAckMessage(actionId: number = 0, sourceId: number = 0, waitAckId: number = 0): AbstractGameActionWithAckMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.waitAckId = waitAckId;
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
        this.serializeAs_AbstractGameActionWithAckMessage(output);
    }

    public serializeAs_AbstractGameActionWithAckMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        output.writeShort(this.waitAckId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AbstractGameActionWithAckMessage(input);
    }

    private deserializeAs_AbstractGameActionWithAckMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._waitAckIdFunc(input);
    }

    private _waitAckIdFunc(input: ICustomDataInput)
    {
        this.waitAckId = input.readShort();
    }

}