import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { BooleanByteWrapper } from "./../../../../../../../jerakine/network/utils/BooleanByteWrapper";
import { ObjectEffectInteger } from "./ObjectEffectInteger";
import { ObjectEffect } from "./ObjectEffect";

export class ObjectEffectMount extends ObjectEffect implements INetworkType
{

	public static readonly protocolId: number = 3353;

	public id: number = 0;
	public expirationDate: number = 0;
	public model: number = 0;
	public name: string = "";
	public owner: string = "";
	public level: number = 0;
	public sex: boolean = false;
	public isRideable: boolean = false;
	public isFeconded: boolean = false;
	public isFecondationReady: boolean = false;
	public reproductionCount: number = 0;
	public reproductionCountMax: number = 0;
	public effects: Array<ObjectEffectInteger>;
	public capacities: Array<number>;

    public constructor()
    {
        super();
        this.effects = Array<ObjectEffectInteger>();
        this.capacities = Array<number>();
    }

    public getTypeId()
    {
        return ObjectEffectMount.protocolId;
    }

    public initObjectEffectMount(actionId: number = 0, id: number = 0, expirationDate: number = 0, model: number = 0, name: string = "", owner: string = "", level: number = 0, sex: boolean = false, isRideable: boolean = false, isFeconded: boolean = false, isFecondationReady: boolean = false, reproductionCount: number = 0, reproductionCountMax: number = 0, effects: Array<ObjectEffectInteger> = null, capacities: Array<number> = null): ObjectEffectMount
    {
        super.initObjectEffect(actionId);
        this.id = id;
        this.expirationDate = expirationDate;
        this.model = model;
        this.name = name;
        this.owner = owner;
        this.level = level;
        this.sex = sex;
        this.isRideable = isRideable;
        this.isFeconded = isFeconded;
        this.isFecondationReady = isFecondationReady;
        this.reproductionCount = reproductionCount;
        this.reproductionCountMax = reproductionCountMax;
        this.effects = effects;
        this.capacities = capacities;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectEffectMount(output);
    }

    public serializeAs_ObjectEffectMount(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectEffect(output);
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.sex);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.isRideable);
        _box0 = BooleanByteWrapper.setFlag(_box0,2,this.isFeconded);
        _box0 = BooleanByteWrapper.setFlag(_box0,3,this.isFecondationReady);
        output.writeByte(_box0);
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarLong(this.id);
        if(this.expirationDate < 0 || this.expirationDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.expirationDate + ") on element expirationDate.");
        }
        output.writeVarLong(this.expirationDate);
        if(this.model < 0)
        {
            throw new Error("Forbidden value (" + this.model + ") on element model.");
        }
        output.writeVarInt(this.model);
        output.writeUTF(this.name);
        output.writeUTF(this.owner);
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeByte(this.level);
        output.writeVarInt(this.reproductionCount);
        if(this.reproductionCountMax < 0)
        {
            throw new Error("Forbidden value (" + this.reproductionCountMax + ") on element reproductionCountMax.");
        }
        output.writeVarInt(this.reproductionCountMax);
        output.writeShort(this.effects.length);
        for(var _i13: number = 0; _i13 < this.effects.length; _i13++)
        {
            (this.effects[_i13] as ObjectEffectInteger).serializeAs_ObjectEffectInteger(output);
        }
        output.writeShort(this.capacities.length);
        for(var _i14: number = 0; _i14 < this.capacities.length; _i14++)
        {
            if(this.capacities[_i14] < 0)
            {
                throw new Error("Forbidden value (" + this.capacities[_i14] + ") on element 14 (starting at 1) of capacities.");
            }
            output.writeVarInt(this.capacities[_i14]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectEffectMount(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.sex = BooleanByteWrapper.getFlag(_box0,0);
        this.isRideable = BooleanByteWrapper.getFlag(_box0,1);
        this.isFeconded = BooleanByteWrapper.getFlag(_box0,2);
        this.isFecondationReady = BooleanByteWrapper.getFlag(_box0,3);
    }

    private deserializeAs_ObjectEffectMount(input: ICustomDataInput)
    {
        let _item13: ObjectEffectInteger;
        let _val14: number = 0;
        super.deserialize(input);
        this.deserializeByteBoxes(input);
        this._idFunc(input);
        this._expirationDateFunc(input);
        this._modelFunc(input);
        this._nameFunc(input);
        this._ownerFunc(input);
        this._levelFunc(input);
        this._reproductionCountFunc(input);
        this._reproductionCountMaxFunc(input);
        let _effectsLen: number = input.readUnsignedShort();
        for(let _i13: number = 0; _i13 < _effectsLen; _i13++)
        {
            _item13 = new ObjectEffectInteger();
            _item13.deserialize(input);
            this.effects.push(_item13);
        }
        let _capacitiesLen: number = input.readUnsignedShort();
        for(let _i14: number = 0; _i14 < _capacitiesLen; _i14++)
        {
            _val14 = input.readVarUhInt();
            if(_val14 < 0)
            {
                throw new Error("Forbidden value (" + _val14 + ") on elements of capacities.");
            }
            this.capacities.push(_val14);
        }
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhLong();
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of ObjectEffectMount.id.");
        }
    }

    private _expirationDateFunc(input: ICustomDataInput)
    {
        this.expirationDate = input.readVarUhLong();
        if(this.expirationDate < 0 || this.expirationDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.expirationDate + ") on element of ObjectEffectMount.expirationDate.");
        }
    }

    private _modelFunc(input: ICustomDataInput)
    {
        this.model = input.readVarUhInt();
        if(this.model < 0)
        {
            throw new Error("Forbidden value (" + this.model + ") on element of ObjectEffectMount.model.");
        }
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

    private _ownerFunc(input: ICustomDataInput)
    {
        this.owner = input.readUTF();
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readByte();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of ObjectEffectMount.level.");
        }
    }

    private _reproductionCountFunc(input: ICustomDataInput)
    {
        this.reproductionCount = input.readVarInt();
    }

    private _reproductionCountMaxFunc(input: ICustomDataInput)
    {
        this.reproductionCountMax = input.readVarUhInt();
        if(this.reproductionCountMax < 0)
        {
            throw new Error("Forbidden value (" + this.reproductionCountMax + ") on element of ObjectEffectMount.reproductionCountMax.");
        }
    }

}