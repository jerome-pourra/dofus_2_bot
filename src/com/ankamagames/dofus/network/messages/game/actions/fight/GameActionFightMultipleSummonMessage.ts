import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { GameContextSummonsInformation } from "./../../../../types/game/context/fight/GameContextSummonsInformation";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightMultipleSummonMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8549;

	public summons: Array<GameContextSummonsInformation>;

    public constructor()
    {
        super();
        this.summons = Array<GameContextSummonsInformation>();
    }

    public getMessageId()
    {
        return GameActionFightMultipleSummonMessage.protocolId;
    }

    public initGameActionFightMultipleSummonMessage(actionId: number = 0, sourceId: number = 0, summons: Array<GameContextSummonsInformation> = null): GameActionFightMultipleSummonMessage
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
        this.serializeAs_GameActionFightMultipleSummonMessage(output);
    }

    public serializeAs_GameActionFightMultipleSummonMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        output.writeShort(this.summons.length);
        for(var _i1: number = 0; _i1 < this.summons.length; _i1++)
        {
            output.writeShort((this.summons[_i1] as GameContextSummonsInformation).getTypeId());
            (this.summons[_i1] as GameContextSummonsInformation).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightMultipleSummonMessage(input);
    }

    private deserializeAs_GameActionFightMultipleSummonMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: GameContextSummonsInformation;
        super.deserialize(input);
        let _summonsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _summonsLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(GameContextSummonsInformation,_id1);
            _item1.deserialize(input);
            this.summons.push(_item1);
        }
    }

}