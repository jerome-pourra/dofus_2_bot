import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ObjectEffect } from "./ObjectEffect";

export class ObjectEffectInteger extends ObjectEffect
{

	public static readonly protocolId: number = 3930;

	public value: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectEffectInteger(input);
    }

    private deserializeAs_ObjectEffectInteger(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._valueFunc(input);
    }

    private _valueFunc(input: ICustomDataInput)
    {
        this.value = input.readVarUhInt();
        if(this.value < 0)
        {
            throw new Error("Forbidden value (" + this.value + ") on element of ObjectEffectInteger.value.");
        }
    }

}