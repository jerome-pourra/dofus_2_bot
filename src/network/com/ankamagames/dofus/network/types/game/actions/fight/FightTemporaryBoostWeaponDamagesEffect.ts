import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTemporaryBoostEffect } from "./FightTemporaryBoostEffect";

export class FightTemporaryBoostWeaponDamagesEffect extends FightTemporaryBoostEffect
{

	public static readonly protocolId: number = 9695;

	public weaponTypeId: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTemporaryBoostWeaponDamagesEffect(input);
    }

    private deserializeAs_FightTemporaryBoostWeaponDamagesEffect(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._weaponTypeIdFunc(input);
    }

    private _weaponTypeIdFunc(input: ICustomDataInput)
    {
        this.weaponTypeId = input.readShort();
    }

}