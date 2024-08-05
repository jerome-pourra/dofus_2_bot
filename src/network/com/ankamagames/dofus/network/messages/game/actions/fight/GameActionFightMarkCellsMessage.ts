import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { GameActionMark } from "./../../../../types/game/actions/fight/GameActionMark";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightMarkCellsMessage extends AbstractGameActionMessage
{

	public static readonly protocolId: number = 432;

	public mark: GameActionMark;

    public constructor()
    {
        super();
        this.mark = new GameActionMark();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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