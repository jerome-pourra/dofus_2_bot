import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ObjectEffect } from "./ObjectEffect";

export class ObjectEffectInteger extends ObjectEffect implements INetworkType
{

	public static readonly protocolId: number = 3930;

	public value: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ObjectEffectInteger.protocolId;
    }

    public initObjectEffectInteger(actionId: number = 0, value: number = 0): ObjectEffectInteger
    {
        super.initObjectEffect(actionId);
        this.value = value;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectEffectInteger(output);
    }

    public serializeAs_ObjectEffectInteger(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectEffect(output);
        if(this.value < 0)
        {
            throw new Error("Forbidden value (" + this.value + ") on element value.");
        }
        output.writeVarInt(this.value);
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