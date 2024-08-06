import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { GameActionMark } from "./../../../../types/game/actions/fight/GameActionMark";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightMarkCellsMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 432;

	public mark: GameActionMark;

    public constructor()
    {
        super();
        this.mark = new GameActionMark();
    }

    public getMessageId()
    {
        return GameActionFightMarkCellsMessage.protocolId;
    }

    public initGameActionFightMarkCellsMessage(actionId: number = 0, sourceId: number = 0, mark: GameActionMark = null): GameActionFightMarkCellsMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.mark = mark;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameActionFightMarkCellsMessage(output);
    }

    public serializeAs_GameActionFightMarkCellsMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        this.mark.serializeAs_GameActionMark(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightMarkCellsMessage(input);
    }

    private deserializeAs_GameActionFightMarkCellsMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.mark = new GameActionMark();
        this.mark.deserialize(input);
    }

}