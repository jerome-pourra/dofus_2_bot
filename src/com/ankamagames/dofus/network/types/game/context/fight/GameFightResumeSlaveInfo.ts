import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameFightSpellCooldown } from "./GameFightSpellCooldown";

export class GameFightResumeSlaveInfo implements INetworkType
{

	public static readonly protocolId: number = 6502;

	public slaveId: number = 0;
	public spellCooldowns: Array<GameFightSpellCooldown>;
	public summonCount: number = 0;
	public bombCount: number = 0;

    public constructor()
    {
        this.spellCooldowns = Array<GameFightSpellCooldown>();
    }

    public getTypeId()
    {
        return GameFightResumeSlaveInfo.protocolId;
    }

    public initGameFightResumeSlaveInfo(slaveId: number = 0, spellCooldowns: Array<GameFightSpellCooldown> = null, summonCount: number = 0, bombCount: number = 0): GameFightResumeSlaveInfo
    {
        this.slaveId = slaveId;
        this.spellCooldowns = spellCooldowns;
        this.summonCount = summonCount;
        this.bombCount = bombCount;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightResumeSlaveInfo(output);
    }

    public serializeAs_GameFightResumeSlaveInfo(output: ICustomDataOutput)
    {
        if(this.slaveId < -9007199254740992 || this.slaveId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.slaveId + ") on element slaveId.");
        }
        output.writeDouble(this.slaveId);
        output.writeShort(this.spellCooldowns.length);
        for(var _i2: number = 0; _i2 < this.spellCooldowns.length; _i2++)
        {
            (this.spellCooldowns[_i2] as GameFightSpellCooldown).serializeAs_GameFightSpellCooldown(output);
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
        this.deserializeAs_GameFightResumeSlaveInfo(input);
    }

    private deserializeAs_GameFightResumeSlaveInfo(input: ICustomDataInput)
    {
        let _item2: GameFightSpellCooldown;
        this._slaveIdFunc(input);
        let _spellCooldownsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _spellCooldownsLen; _i2++)
        {
            _item2 = new GameFightSpellCooldown();
            _item2.deserialize(input);
            this.spellCooldowns.push(_item2);
        }
        this._summonCountFunc(input);
        this._bombCountFunc(input);
    }

    private _slaveIdFunc(input: ICustomDataInput)
    {
        this.slaveId = input.readDouble();
        if(this.slaveId < -9007199254740992 || this.slaveId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.slaveId + ") on element of GameFightResumeSlaveInfo.slaveId.");
        }
    }

    private _summonCountFunc(input: ICustomDataInput)
    {
        this.summonCount = input.readByte();
        if(this.summonCount < 0)
        {
            throw new Error("Forbidden value (" + this.summonCount + ") on element of GameFightResumeSlaveInfo.summonCount.");
        }
    }

    private _bombCountFunc(input: ICustomDataInput)
    {
        this.bombCount = input.readByte();
        if(this.bombCount < 0)
        {
            throw new Error("Forbidden value (" + this.bombCount + ") on element of GameFightResumeSlaveInfo.bombCount.");
        }
    }

}