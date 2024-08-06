import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTemporaryBoostEffect } from "./FightTemporaryBoostEffect";

export class FightTemporaryBoostWeaponDamagesEffect extends FightTemporaryBoostEffect implements INetworkType
{

	public static readonly protocolId: number = 9695;

	public weaponTypeId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightTemporaryBoostWeaponDamagesEffect.protocolId;
    }

    public initFightTemporaryBoostWeaponDamagesEffect(uid: number = 0, targetId: number = 0, turnDuration: number = 0, dispelable: number = 1, spellId: number = 0, effectId: number = 0, parentBoostUid: number = 0, delta: number = 0, weaponTypeId: number = 0): FightTemporaryBoostWeaponDamagesEffect
    {
        super.initFightTemporaryBoostEffect(uid,targetId,turnDuration,dispelable,spellId,effectId,parentBoostUid,delta);
        this.weaponTypeId = weaponTypeId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightTemporaryBoostWeaponDamagesEffect(output);
    }

    public serializeAs_FightTemporaryBoostWeaponDamagesEffect(output: ICustomDataOutput)
    {
        super.serializeAs_FightTemporaryBoostEffect(output);
        output.writeShort(this.weaponTypeId);
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