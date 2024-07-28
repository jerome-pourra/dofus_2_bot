import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTemporaryBoostEffect } from "./FightTemporaryBoostEffect";

export class FightTemporarySpellBoostEffect extends FightTemporaryBoostEffect
{

	public static readonly protocolId: number = 7119;

	public boostedSpellId: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTemporarySpellBoostEffect(input);
    }

    private deserializeAs_FightTemporarySpellBoostEffect(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._boostedSpellIdFunc(input);
    }

    private _boostedSpellIdFunc(input: ICustomDataInput)
    {
        this.boostedSpellId = input.readVarUhShort();
        if(this.boostedSpellId < 0)
        {
            throw new Error("Forbidden value (" + this.boostedSpellId + ") on element of FightTemporarySpellBoostEffect.boostedSpellId.");
        }
    }

}