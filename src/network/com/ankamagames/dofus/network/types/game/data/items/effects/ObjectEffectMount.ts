import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { BooleanByteWrapper } from "./../../../../../../../jerakine/network/utils/BooleanByteWrapper";
import { ObjectEffectInteger } from "./ObjectEffectInteger";
import { ObjectEffect } from "./ObjectEffect";

export class ObjectEffectMount extends ObjectEffect
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