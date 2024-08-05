import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { AbstractFightDispellableEffect } from "./AbstractFightDispellableEffect";

export class FightTemporarySpellImmunityEffect extends AbstractFightDispellableEffect
{

	public static readonly protocolId: number = 3450;

	public immuneSpellId: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTemporarySpellImmunityEffect(input);
    }

    private deserializeAs_FightTemporarySpellImmunityEffect(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._immuneSpellIdFunc(input);
    }

    private _immuneSpellIdFunc(input: ICustomDataInput)
    {
        this.immuneSpellId = input.readInt();
    }

}