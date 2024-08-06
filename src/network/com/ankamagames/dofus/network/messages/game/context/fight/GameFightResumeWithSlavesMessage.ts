import { FightDispellableEffectExtendedInformations } from "./../../../../types/game/action/fight/FightDispellableEffectExtendedInformations";
import { GameActionMark } from "./../../../../types/game/actions/fight/GameActionMark";
import { GameFightEffectTriggerCount } from "./../../../../types/game/context/fight/GameFightEffectTriggerCount";
import { GameFightResumeSlaveInfo } from "./../../../../types/game/context/fight/GameFightResumeSlaveInfo";
import { GameFightSpellCooldown } from "./../../../../types/game/context/fight/GameFightSpellCooldown";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameFightResumeMessage } from "./GameFightResumeMessage";

export class GameFightResumeWithSlavesMessage extends GameFightResumeMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5652;

	public slavesInfo: Array<GameFightResumeSlaveInfo>;

    public constructor()
    {
        super();
        this.slavesInfo = Array<GameFightResumeSlaveInfo>();
    }

    public getMessageId()
    {
        return GameFightResumeWithSlavesMessage.protocolId;
    }

    public initGameFightResumeWithSlavesMessage(effects: Array<FightDispellableEffectExtendedInformations> = null, marks: Array<GameActionMark> = null, gameTurn: number = 0, fightStart: number = 0, fxTriggerCounts: Array<GameFightEffectTriggerCount> = null, spellCooldowns: Array<GameFightSpellCooldown> = null, summonCount: number = 0, bombCount: number = 0, slavesInfo: Array<GameFightResumeSlaveInfo> = null): GameFightResumeWithSlavesMessage
    {
        super.initGameFightResumeMessage(effects,marks,gameTurn,fightStart,fxTriggerCounts,spellCooldowns,summonCount,bombCount);
        this.slavesInfo = slavesInfo;
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
        this.serializeAs_GameFightResumeWithSlavesMessage(output);
    }

    public serializeAs_GameFightResumeWithSlavesMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightResumeMessage(output);
        output.writeShort(this.slavesInfo.length);
        for(var _i1: number = 0; _i1 < this.slavesInfo.length; _i1++)
        {
            (this.slavesInfo[_i1] as GameFightResumeSlaveInfo).serializeAs_GameFightResumeSlaveInfo(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightResumeWithSlavesMessage(input);
    }

    private deserializeAs_GameFightResumeWithSlavesMessage(input: ICustomDataInput)
    {
        let _item1: GameFightResumeSlaveInfo;
        super.deserialize(input);
        let _slavesInfoLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _slavesInfoLen; _i1++)
        {
            _item1 = new GameFightResumeSlaveInfo();
            _item1.deserialize(input);
            this.slavesInfo.push(_item1);
        }
    }

}