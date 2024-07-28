import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ObjectEffect } from "./ObjectEffect";

export class ObjectEffectMinMax extends ObjectEffect
{

	public static readonly protocolId: number = 843;

	public min: number = 0;
	public max: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectEffectMinMax(input);
    }

    private deserializeAs_ObjectEffectMinMax(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._minFunc(input);
        this._maxFunc(input);
    }

    private _minFunc(input: ICustomDataInput)
    {
        this.min = input.readVarUhInt();
        if(this.min < 0)
        {
            throw new Error("Forbidden value (" + this.min + ") on element of ObjectEffectMinMax.min.");
        }
    }

    private _maxFunc(input: ICustomDataInput)
    {
        this.max = input.readVarUhInt();
        if(this.max < 0)
        {
            throw new Error("Forbidden value (" + this.max + ") on element of ObjectEffectMinMax.max.");
        }
    }

}