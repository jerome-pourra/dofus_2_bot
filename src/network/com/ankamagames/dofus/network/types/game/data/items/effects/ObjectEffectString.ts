import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ObjectEffect } from "./ObjectEffect";

export class ObjectEffectString extends ObjectEffect implements INetworkType
{

	public static readonly protocolId: number = 3424;

	public value: string = "";

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ObjectEffectString.protocolId;
    }

    public initObjectEffectString(actionId: number = 0, value: string = ""): ObjectEffectString
    {
        super.initObjectEffect(actionId);
        this.value = value;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectEffectString(output);
    }

    public serializeAs_ObjectEffectString(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectEffect(output);
        output.writeUTF(this.value);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectEffectString(input);
    }

    private deserializeAs_ObjectEffectString(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._valueFunc(input);
    }

    private _valueFunc(input: ICustomDataInput)
    {
        this.value = input.readUTF();
    }

}