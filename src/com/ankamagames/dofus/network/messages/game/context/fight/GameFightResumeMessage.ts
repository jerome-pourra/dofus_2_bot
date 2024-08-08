import { FightDispellableEffectExtendedInformations } from "./../../../../types/game/action/fight/FightDispellableEffectExtendedInformations";
import { GameActionMark } from "./../../../../types/game/actions/fight/GameActionMark";
import { GameFightEffectTriggerCount } from "./../../../../types/game/context/fight/GameFightEffectTriggerCount";
import { GameFightSpellCooldown } from "./../../../../types/game/context/fight/GameFightSpellCooldown";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameFightSpectateMessage } from "./GameFightSpectateMessage";

export class GameFightResumeMessage extends GameFightSpectateMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2675;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public spellCooldowns: Array<GameFightSpellCooldown>;
	public summonCount: number = 0;
	public bombCount: number = 0;

    public constructor()
    {
        super();
        this.spellCooldowns = Array<GameFightSpellCooldown>();
    }

    public getMessageId()
    {
        return GameFightResumeMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightResumeMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightResumeMessage.endpointServer;
    }

    public initGameFightResumeMessage(effects: Array<FightDispellableEffectExtendedInformations> = null, marks: Array<GameActionMark> = null, gameTurn: number = 0, fightStart: number = 0, fxTriggerCounts: Array<GameFightEffectTriggerCount> = null, spellCooldowns: Array<GameFightSpellCooldown> = null, summonCount: number = 0, bombCount: number = 0): GameFightResumeMessage
    {
        super.initGameFightSpectateMessage(effects,marks,gameTurn,fightStart,fxTriggerCounts);
        this.spellCooldowns = spellCooldowns;
        this.summonCount = summonCount;
        this.bombCount = bombCount;
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
        this.serializeAs_GameFightResumeMessage(output);
    }

    public serializeAs_GameFightResumeMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightSpectateMessage(output);
        output.writeShort(this.spellCooldowns.length);
        for(var _i1: number = 0; _i1 < this.spellCooldowns.length; _i1++)
        {
            (this.spellCooldowns[_i1] as GameFightSpellCooldown).serializeAs_GameFightSpellCooldown(output);
        }
        if(this.summonCount < 0)
        {
            throw new Error("Forbidden value (" + this.summonCount + ") on element summonCount.");
        }
        output.writeByte(this.summonCount);
        if(this.bombCount < 0)
        {
            throw new Error("Forbidden value (" + this.bombCount + ") on element bombCount.");
        }
        output.writeByte(this.bombCount);
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