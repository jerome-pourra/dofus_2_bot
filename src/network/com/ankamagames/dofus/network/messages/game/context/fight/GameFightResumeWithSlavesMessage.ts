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

export class GameFightResumeWithSlavesMessage extends GameFightResumeMessage
{

	public static readonly protocolId: number = 5652;

	public slavesInfo: Array<GameFightResumeSlaveInfo>;

    public constructor()
    {
        super();
        this.slavesInfo = Array<GameFightResumeSlaveInfo>();
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