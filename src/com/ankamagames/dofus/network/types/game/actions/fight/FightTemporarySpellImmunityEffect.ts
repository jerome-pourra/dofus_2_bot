import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { AbstractFightDispellableEffect } from "./AbstractFightDispellableEffect";

export class FightTemporarySpellImmunityEffect extends AbstractFightDispellableEffect implements INetworkType
{

	public static readonly protocolId: number = 3450;

	public immuneSpellId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightTemporarySpellImmunityEffect.protocolId;
    }

    public initFightTemporarySpellImmunityEffect(uid: number = 0, targetId: number = 0, turnDuration: number = 0, dispelable: number = 1, spellId: number = 0, effectId: number = 0, parentBoostUid: number = 0, immuneSpellId: number = 0): FightTemporarySpellImmunityEffect
    {
        super.initAbstractFightDispellableEffect(uid,targetId,turnDuration,dispelable,spellId,effectId,parentBoostUid);
        this.immuneSpellId = immuneSpellId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightTemporarySpellImmunityEffect(output);
    }

    public serializeAs_FightTemporarySpellImmunityEffect(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractFightDispellableEffect(output);
        output.writeInt(this.immuneSpellId);
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