import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { GameFightFighterInformations } from "./../../../../types/game/context/fight/GameFightFighterInformations";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightSummonMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7363;

	public summons: Array<GameFightFighterInformations>;

    public constructor()
    {
        super();
        this.summons = Array<GameFightFighterInformations>();
    }

    public getMessageId()
    {
        return GameActionFightSummonMessage.protocolId;
    }

    public initGameActionFightSummonMessage(actionId: number = 0, sourceId: number = 0, summons: Array<GameFightFighterInformations> = null): GameActionFightSummonMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.summons = summons;
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
        this.serializeAs_GameActionFightSummonMessage(output);
    }

    public serializeAs_GameActionFightSummonMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        output.writeShort(this.summons.length);
        for(var _i1: number = 0; _i1 < this.summons.length; _i1++)
        {
            output.writeShort((this.summons[_i1] as GameFightFighterInformations).getTypeId());
            (this.summons[_i1] as GameFightFighterInformations).serialize(output);
        }
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