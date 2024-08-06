import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ObjectEffect } from "./ObjectEffect";

export class ObjectEffectDate extends ObjectEffect implements INetworkType
{

	public static readonly protocolId: number = 3435;

	public year: number = 0;
	public month: number = 0;
	public day: number = 0;
	public hour: number = 0;
	public minute: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ObjectEffectDate.protocolId;
    }

    public initObjectEffectDate(actionId: number = 0, year: number = 0, month: number = 0, day: number = 0, hour: number = 0, minute: number = 0): ObjectEffectDate
    {
        super.initObjectEffect(actionId);
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectEffectDate(output);
    }

    public serializeAs_ObjectEffectDate(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectEffect(output);
        if(this.year < 0)
        {
            throw new Error("Forbidden value (" + this.year + ") on element year.");
        }
        output.writeVarShort(this.year);
        if(this.month < 0)
        {
            throw new Error("Forbidden value (" + this.month + ") on element month.");
        }
        output.writeByte(this.month);
        if(this.day < 0)
        {
            throw new Error("Forbidden value (" + this.day + ") on element day.");
        }
        output.writeByte(this.day);
        if(this.hour < 0)
        {
            throw new Error("Forbidden value (" + this.hour + ") on element hour.");
        }
        output.writeByte(this.hour);
        if(this.minute < 0)
        {
            throw new Error("Forbidden value (" + this.minute + ") on element minute.");
        }
        output.writeByte(this.minute);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectEffectDate(input);
    }

    private deserializeAs_ObjectEffectDate(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._yearFunc(input);
        this._monthFunc(input);
        this._dayFunc(input);
        this._hourFunc(input);
        this._minuteFunc(input);
    }

    private _yearFunc(input: ICustomDataInput)
    {
        this.year = input.readVarUhShort();
        if(this.year < 0)
        {
            throw new Error("Forbidden value (" + this.year + ") on element of ObjectEffectDate.year.");
        }
    }

    private _monthFunc(input: ICustomDataInput)
    {
        this.month = input.readByte();
        if(this.month < 0)
        {
            throw new Error("Forbidden value (" + this.month + ") on element of ObjectEffectDate.month.");
        }
    }

    private _dayFunc(input: ICustomDataInput)
    {
        this.day = input.readByte();
        if(this.day < 0)
        {
            throw new Error("Forbidden value (" + this.day + ") on element of ObjectEffectDate.day.");
        }
    }

    private _hourFunc(input: ICustomDataInput)
    {
        this.hour = input.readByte();
        if(this.hour < 0)
        {
            throw new Error("Forbidden value (" + this.hour + ") on element of ObjectEffectDate.hour.");
        }
    }

    private _minuteFunc(input: ICustomDataInput)
    {
        this.minute = input.readByte();
        if(this.minute < 0)
        {
            throw new Error("Forbidden value (" + this.minute + ") on element of ObjectEffectDate.minute.");
        }
    }

}