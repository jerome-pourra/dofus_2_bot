import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightUnmarkCellsMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9827;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public markId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightUnmarkCellsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionFightUnmarkCellsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionFightUnmarkCellsMessage.endpointServer;
    }

    public initGameActionFightUnmarkCellsMessage(actionId: number = 0, sourceId: number = 0, markId: number = 0): GameActionFightUnmarkCellsMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.markId = markId;
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
        this.serializeAs_GameActionFightUnmarkCellsMessage(output);
    }

    public serializeAs_GameActionFightUnmarkCellsMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        output.writeShort(this.markId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightUnmarkCellsMessage(input);
    }

    private deserializeAs_GameActionFightUnmarkCellsMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._markIdFunc(input);
    }

    private _markIdFunc(input: ICustomDataInput)
    {
        this.markId = input.readShort();
    }

}