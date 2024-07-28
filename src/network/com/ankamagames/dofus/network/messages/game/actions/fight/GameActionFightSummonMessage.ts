import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { GameFightFighterInformations } from "./../../../../types/game/context/fight/GameFightFighterInformations";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightSummonMessage extends AbstractGameActionMessage
{

	public static readonly protocolId: number = 7363;

	public summons: Array<GameFightFighterInformations>;

    public constructor()
    {
        super();
        this.summons = Array<GameFightFighterInformations>();
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
        this.deserializeAs_GameActionFightSummonMessage(input);
    }

    private deserializeAs_GameActionFightSummonMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: GameFightFighterInformations;
        super.deserialize(input);
        let _summonsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _summonsLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(GameFightFighterInformations,_id1);
            _item1.deserialize(input);
            this.summons.push(_item1);
        }
    }

}