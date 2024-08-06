import { ObjectEffectInteger } from "./../data/items/effects/ObjectEffectInteger";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";

export class MountClientData implements INetworkType
{

	public static readonly protocolId: number = 4446;

	public id: number = 0;
	public model: number = 0;
	public ancestor: Array<number>;
	public behaviors: Array<number>;
	public name: string = "";
	public sex: boolean = false;
	public ownerId: number = 0;
	public experience: number = 0;
	public experienceForLevel: number = 0;
	public experienceForNextLevel: number = 0;
	public level: number = 0;
	public isRideable: boolean = false;
	public maxPods: number = 0;
	public isWild: boolean = false;
	public stamina: number = 0;
	public staminaMax: number = 0;
	public maturity: number = 0;
	public maturityForAdult: number = 0;
	public energy: number = 0;
	public energyMax: number = 0;
	public serenity: number = 0;
	public aggressivityMax: number = 0;
	public serenityMax: number = 0;
	public love: number = 0;
	public loveMax: number = 0;
	public fecondationTime: number = 0;
	public isFecondationReady: boolean = false;
	public boostLimiter: number = 0;
	public boostMax: number = 0;
	public reproductionCount: number = 0;
	public reproductionCountMax: number = 0;
	public harnessGID: number = 0;
	public useHarnessColors: boolean = false;
	public effectList: Array<ObjectEffectInteger>;

    public constructor()
    {
        this.ancestor = Array<number>();
        this.behaviors = Array<number>();
        this.effectList = Array<ObjectEffectInteger>();
    }

    public getTypeId()
    {
        return MountClientData.protocolId;
    }

    public initMountClientData(id: number = 0, model: number = 0, ancestor: Array<number> = null, behaviors: Array<number> = null, name: string = "", sex: boolean = false, ownerId: number = 0, experience: number = 0, experienceForLevel: number = 0, experienceForNextLevel: number = 0, level: number = 0, isRideable: boolean = false, maxPods: number = 0, isWild: boolean = false, stamina: number = 0, staminaMax: number = 0, maturity: number = 0, maturityForAdult: number = 0, energy: number = 0, energyMax: number = 0, serenity: number = 0, aggressivityMax: number = 0, serenityMax: number = 0, love: number = 0, loveMax: number = 0, fecondationTime: number = 0, isFecondationReady: boolean = false, boostLimiter: number = 0, boostMax: number = 0, reproductionCount: number = 0, reproductionCountMax: number = 0, harnessGID: number = 0, useHarnessColors: boolean = false, effectList: Array<ObjectEffectInteger> = null): MountClientData
    {
        this.id = id;
        this.model = model;
        this.ancestor = ancestor;
        this.behaviors = behaviors;
        this.name = name;
        this.sex = sex;
        this.ownerId = ownerId;
        this.experience = experience;
        this.experienceForLevel = experienceForLevel;
        this.experienceForNextLevel = experienceForNextLevel;
        this.level = level;
        this.isRideable = isRideable;
        this.maxPods = maxPods;
        this.isWild = isWild;
        this.stamina = stamina;
        this.staminaMax = staminaMax;
        this.maturity = maturity;
        this.maturityForAdult = maturityForAdult;
        this.energy = energy;
        this.energyMax = energyMax;
        this.serenity = serenity;
        this.aggressivityMax = aggressivityMax;
        this.serenityMax = serenityMax;
        this.love = love;
        this.loveMax = loveMax;
        this.fecondationTime = fecondationTime;
        this.isFecondationReady = isFecondationReady;
        this.boostLimiter = boostLimiter;
        this.boostMax = boostMax;
        this.reproductionCount = reproductionCount;
        this.reproductionCountMax = reproductionCountMax;
        this.harnessGID = harnessGID;
        this.useHarnessColors = useHarnessColors;
        this.effectList = effectList;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_MountClientData(output);
    }

    public serializeAs_MountClientData(output: ICustomDataOutput)
    {
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.sex);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.isRideable);
        _box0 = BooleanByteWrapper.setFlag(_box0,2,this.isWild);
        _box0 = BooleanByteWrapper.setFlag(_box0,3,this.isFecondationReady);
        _box0 = BooleanByteWrapper.setFlag(_box0,4,this.useHarnessColors);
        output.writeByte(_box0);
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeDouble(this.id);
        if(this.model < 0)
        {
            throw new Error("Forbidden value (" + this.model + ") on element model.");
        }
        output.writeVarInt(this.model);
        output.writeShort(this.ancestor.length);
        for(var _i3: number = 0; _i3 < this.ancestor.length; _i3++)
        {
            if(this.ancestor[_i3] < 0)
            {
                throw new Error("Forbidden value (" + this.ancestor[_i3] + ") on element 3 (starting at 1) of ancestor.");
            }
            output.writeInt(this.ancestor[_i3]);
        }
        output.writeShort(this.behaviors.length);
        for(var _i4: number = 0; _i4 < this.behaviors.length; _i4++)
        {
            if(this.behaviors[_i4] < 0)
            {
                throw new Error("Forbidden value (" + this.behaviors[_i4] + ") on element 4 (starting at 1) of behaviors.");
            }
            output.writeInt(this.behaviors[_i4]);
        }
        output.writeUTF(this.name);
        if(this.ownerId < 0)
        {
            throw new Error("Forbidden value (" + this.ownerId + ") on element ownerId.");
        }
        output.writeInt(this.ownerId);
        if(this.experience < 0 || this.experience > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experience + ") on element experience.");
        }
        output.writeVarLong(this.experience);
        if(this.experienceForLevel < 0 || this.experienceForLevel > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceForLevel + ") on element experienceForLevel.");
        }
        output.writeVarLong(this.experienceForLevel);
        if(this.experienceForNextLevel < -9007199254740992 || this.experienceForNextLevel > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceForNextLevel + ") on element experienceForNextLevel.");
        }
        output.writeDouble(this.experienceForNextLevel);
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeByte(this.level);
        if(this.maxPods < 0)
        {
            throw new Error("Forbidden value (" + this.maxPods + ") on element maxPods.");
        }
        output.writeVarInt(this.maxPods);
        if(this.stamina < 0)
        {
            throw new Error("Forbidden value (" + this.stamina + ") on element stamina.");
        }
        output.writeVarInt(this.stamina);
        if(this.staminaMax < 0)
        {
            throw new Error("Forbidden value (" + this.staminaMax + ") on element staminaMax.");
        }
        output.writeVarInt(this.staminaMax);
        if(this.maturity < 0)
        {
            throw new Error("Forbidden value (" + this.maturity + ") on element maturity.");
        }
        output.writeVarInt(this.maturity);
        if(this.maturityForAdult < 0)
        {
            throw new Error("Forbidden value (" + this.maturityForAdult + ") on element maturityForAdult.");
        }
        output.writeVarInt(this.maturityForAdult);
        if(this.energy < 0)
        {
            throw new Error("Forbidden value (" + this.energy + ") on element energy.");
        }
        output.writeVarInt(this.energy);
        if(this.energyMax < 0)
        {
            throw new Error("Forbidden value (" + this.energyMax + ") on element energyMax.");
        }
        output.writeVarInt(this.energyMax);
        output.writeInt(this.serenity);
        output.writeInt(this.aggressivityMax);
        if(this.serenityMax < 0)
        {
            throw new Error("Forbidden value (" + this.serenityMax + ") on element serenityMax.");
        }
        output.writeVarInt(this.serenityMax);
        if(this.love < 0)
        {
            throw new Error("Forbidden value (" + this.love + ") on element love.");
        }
        output.writeVarInt(this.love);
        if(this.loveMax < 0)
        {
            throw new Error("Forbidden value (" + this.loveMax + ") on element loveMax.");
        }
        output.writeVarInt(this.loveMax);
        output.writeInt(this.fecondationTime);
        if(this.boostLimiter < 0)
        {
            throw new Error("Forbidden value (" + this.boostLimiter + ") on element boostLimiter.");
        }
        output.writeInt(this.boostLimiter);
        if(this.boostMax < -9007199254740992 || this.boostMax > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.boostMax + ") on element boostMax.");
        }
        output.writeDouble(this.boostMax);
        output.writeInt(this.reproductionCount);
        if(this.reproductionCountMax < 0)
        {
            throw new Error("Forbidden value (" + this.reproductionCountMax + ") on element reproductionCountMax.");
        }
        output.writeVarInt(this.reproductionCountMax);
        if(this.harnessGID < 0)
        {
            throw new Error("Forbidden value (" + this.harnessGID + ") on element harnessGID.");
        }
        output.writeVarInt(this.harnessGID);
        output.writeShort(this.effectList.length);
        for(var _i34: number = 0; _i34 < this.effectList.length; _i34++)
        {
            (this.effectList[_i34] as ObjectEffectInteger).serializeAs_ObjectEffectInteger(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountClientData(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.sex = BooleanByteWrapper.getFlag(_box0,0);
        this.isRideable = BooleanByteWrapper.getFlag(_box0,1);
        this.isWild = BooleanByteWrapper.getFlag(_box0,2);
        this.isFecondationReady = BooleanByteWrapper.getFlag(_box0,3);
        this.useHarnessColors = BooleanByteWrapper.getFlag(_box0,4);
    }

    private deserializeAs_MountClientData(input: ICustomDataInput)
    {
        let _val3: number = 0;
        let _val4: number = 0;
        let _item34: ObjectEffectInteger;
        this.deserializeByteBoxes(input);
        this._idFunc(input);
        this._modelFunc(input);
        let _ancestorLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _ancestorLen; _i3++)
        {
            _val3 = input.readInt();
            if(_val3 < 0)
            {
                throw new Error("Forbidden value (" + _val3 + ") on elements of ancestor.");
            }
            this.ancestor.push(_val3);
        }
        let _behaviorsLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _behaviorsLen; _i4++)
        {
            _val4 = input.readInt();
            if(_val4 < 0)
            {
                throw new Error("Forbidden value (" + _val4 + ") on elements of behaviors.");
            }
            this.behaviors.push(_val4);
        }
        this._nameFunc(input);
        this._ownerIdFunc(input);
        this._experienceFunc(input);
        this._experienceForLevelFunc(input);
        this._experienceForNextLevelFunc(input);
        this._levelFunc(input);
        this._maxPodsFunc(input);
        this._staminaFunc(input);
        this._staminaMaxFunc(input);
        this._maturityFunc(input);
        this._maturityForAdultFunc(input);
        this._energyFunc(input);
        this._energyMaxFunc(input);
        this._serenityFunc(input);
        this._aggressivityMaxFunc(input);
        this._serenityMaxFunc(input);
        this._loveFunc(input);
        this._loveMaxFunc(input);
        this._fecondationTimeFunc(input);
        this._boostLimiterFunc(input);
        this._boostMaxFunc(input);
        this._reproductionCountFunc(input);
        this._reproductionCountMaxFunc(input);
        this._harnessGIDFunc(input);
        let _effectListLen: number = input.readUnsignedShort();
        for(let _i34: number = 0; _i34 < _effectListLen; _i34++)
        {
            _item34 = new ObjectEffectInteger();
            _item34.deserialize(input);
            this.effectList.push(_item34);
        }
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readDouble();
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of MountClientData.id.");
        }
    }

    private _modelFunc(input: ICustomDataInput)
    {
        this.model = input.readVarUhInt();
        if(this.model < 0)
        {
            throw new Error("Forbidden value (" + this.model + ") on element of MountClientData.model.");
        }
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

    private _ownerIdFunc(input: ICustomDataInput)
    {
        this.ownerId = input.readInt();
        if(this.ownerId < 0)
        {
            throw new Error("Forbidden value (" + this.ownerId + ") on element of MountClientData.ownerId.");
        }
    }

    private _experienceFunc(input: ICustomDataInput)
    {
        this.experience = input.readVarUhLong();
        if(this.experience < 0 || this.experience > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experience + ") on element of MountClientData.experience.");
        }
    }

    private _experienceForLevelFunc(input: ICustomDataInput)
    {
        this.experienceForLevel = input.readVarUhLong();
        if(this.experienceForLevel < 0 || this.experienceForLevel > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceForLevel + ") on element of MountClientData.experienceForLevel.");
        }
    }

    private _experienceForNextLevelFunc(input: ICustomDataInput)
    {
        this.experienceForNextLevel = input.readDouble();
        if(this.experienceForNextLevel < -9007199254740992 || this.experienceForNextLevel > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceForNextLevel + ") on element of MountClientData.experienceForNextLevel.");
        }
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readByte();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of MountClientData.level.");
        }
    }

    private _maxPodsFunc(input: ICustomDataInput)
    {
        this.maxPods = input.readVarUhInt();
        if(this.maxPods < 0)
        {
            throw new Error("Forbidden value (" + this.maxPods + ") on element of MountClientData.maxPods.");
        }
    }

    private _staminaFunc(input: ICustomDataInput)
    {
        this.stamina = input.readVarUhInt();
        if(this.stamina < 0)
        {
            throw new Error("Forbidden value (" + this.stamina + ") on element of MountClientData.stamina.");
        }
    }

    private _staminaMaxFunc(input: ICustomDataInput)
    {
        this.staminaMax = input.readVarUhInt();
        if(this.staminaMax < 0)
        {
            throw new Error("Forbidden value (" + this.staminaMax + ") on element of MountClientData.staminaMax.");
        }
    }

    private _maturityFunc(input: ICustomDataInput)
    {
        this.maturity = input.readVarUhInt();
        if(this.maturity < 0)
        {
            throw new Error("Forbidden value (" + this.maturity + ") on element of MountClientData.maturity.");
        }
    }

    private _maturityForAdultFunc(input: ICustomDataInput)
    {
        this.maturityForAdult = input.readVarUhInt();
        if(this.maturityForAdult < 0)
        {
            throw new Error("Forbidden value (" + this.maturityForAdult + ") on element of MountClientData.maturityForAdult.");
        }
    }

    private _energyFunc(input: ICustomDataInput)
    {
        this.energy = input.readVarUhInt();
        if(this.energy < 0)
        {
            throw new Error("Forbidden value (" + this.energy + ") on element of MountClientData.energy.");
        }
    }

    private _energyMaxFunc(input: ICustomDataInput)
    {
        this.energyMax = input.readVarUhInt();
        if(this.energyMax < 0)
        {
            throw new Error("Forbidden value (" + this.energyMax + ") on element of MountClientData.energyMax.");
        }
    }

    private _serenityFunc(input: ICustomDataInput)
    {
        this.serenity = input.readInt();
    }

    private _aggressivityMaxFunc(input: ICustomDataInput)
    {
        this.aggressivityMax = input.readInt();
    }

    private _serenityMaxFunc(input: ICustomDataInput)
    {
        this.serenityMax = input.readVarUhInt();
        if(this.serenityMax < 0)
        {
            throw new Error("Forbidden value (" + this.serenityMax + ") on element of MountClientData.serenityMax.");
        }
    }

    private _loveFunc(input: ICustomDataInput)
    {
        this.love = input.readVarUhInt();
        if(this.love < 0)
        {
            throw new Error("Forbidden value (" + this.love + ") on element of MountClientData.love.");
        }
    }

    private _loveMaxFunc(input: ICustomDataInput)
    {
        this.loveMax = input.readVarUhInt();
        if(this.loveMax < 0)
        {
            throw new Error("Forbidden value (" + this.loveMax + ") on element of MountClientData.loveMax.");
        }
    }

    private _fecondationTimeFunc(input: ICustomDataInput)
    {
        this.fecondationTime = input.readInt();
    }

    private _boostLimiterFunc(input: ICustomDataInput)
    {
        this.boostLimiter = input.readInt();
        if(this.boostLimiter < 0)
        {
            throw new Error("Forbidden value (" + this.boostLimiter + ") on element of MountClientData.boostLimiter.");
        }
    }

    private _boostMaxFunc(input: ICustomDataInput)
    {
        this.boostMax = input.readDouble();
        if(this.boostMax < -9007199254740992 || this.boostMax > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.boostMax + ") on element of MountClientData.boostMax.");
        }
    }

    private _reproductionCountFunc(input: ICustomDataInput)
    {
        this.reproductionCount = input.readInt();
    }

    private _reproductionCountMaxFunc(input: ICustomDataInput)
    {
        this.reproductionCountMax = input.readVarUhInt();
        if(this.reproductionCountMax < 0)
        {
            throw new Error("Forbidden value (" + this.reproductionCountMax + ") on element of MountClientData.reproductionCountMax.");
        }
    }

    private _harnessGIDFunc(input: ICustomDataInput)
    {
        this.harnessGID = input.readVarUhInt();
        if(this.harnessGID < 0)
        {
            throw new Error("Forbidden value (" + this.harnessGID + ") on element of MountClientData.harnessGID.");
        }
    }

}