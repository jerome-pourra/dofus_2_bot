import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ObjectEffect } from "./ObjectEffect";

export class ObjectEffectDate extends ObjectEffect
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