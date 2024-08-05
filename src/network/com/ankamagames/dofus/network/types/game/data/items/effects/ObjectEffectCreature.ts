import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ObjectEffect } from "./ObjectEffect";

export class ObjectEffectCreature extends ObjectEffect
{

	public static readonly protocolId: number = 3987;

	public monsterFamilyId: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectEffectCreature(input);
    }

    private deserializeAs_ObjectEffectCreature(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._monsterFamilyIdFunc(input);
    }

    private _monsterFamilyIdFunc(input: ICustomDataInput)
    {
        this.monsterFamilyId = input.readVarUhShort();
        if(this.monsterFamilyId < 0)
        {
            throw new Error("Forbidden value (" + this.monsterFamilyId + ") on element of ObjectEffectCreature.monsterFamilyId.");
        }
    }

}