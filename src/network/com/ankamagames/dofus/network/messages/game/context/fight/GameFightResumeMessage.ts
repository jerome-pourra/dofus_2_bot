import { FightDispellableEffectExtendedInformations } from "./../../../../types/game/action/fight/FightDispellableEffectExtendedInformations";
import { GameActionMark } from "./../../../../types/game/actions/fight/GameActionMark";
import { GameFightEffectTriggerCount } from "./../../../../types/game/context/fight/GameFightEffectTriggerCount";
import { GameFightSpellCooldown } from "./../../../../types/game/context/fight/GameFightSpellCooldown";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameFightSpectateMessage } from "./GameFightSpectateMessage";

export class GameFightResumeMessage extends GameFightSpectateMessage
{

	public static readonly protocolId: number = 2675;

	public spellCooldowns: Array<GameFightSpellCooldown>;
	public summonCount: number = 0;
	public bombCount: number = 0;

    public constructor()
    {
        super();
        this.spellCooldowns = Array<GameFightSpellCooldown>();
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
        this.deserializeAs_GameFightResumeMessage(input);
    }

    private deserializeAs_GameFightResumeMessage(input: ICustomDataInput)
    {
        let _item1: GameFightSpellCooldown;
        super.deserialize(input);
        let _spellCooldownsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _spellCooldownsLen; _i1++)
        {
            _item1 = new GameFightSpellCooldown();
            _item1.deserialize(input);
            this.spellCooldowns.push(_item1);
        }
        this._summonCountFunc(input);
        this._bombCountFunc(input);
    }

    private _summonCountFunc(input: ICustomDataInput)
    {
        this.summonCount = input.readByte();
        if(this.summonCount < 0)
        {
            throw new Error("Forbidden value (" + this.summonCount + ") on element of GameFightResumeMessage.summonCount.");
        }
    }

    private _bombCountFunc(input: ICustomDataInput)
    {
        this.bombCount = input.readByte();
        if(this.bombCount < 0)
        {
            throw new Error("Forbidden value (" + this.bombCount + ") on element of GameFightResumeMessage.bombCount.");
        }
    }

}