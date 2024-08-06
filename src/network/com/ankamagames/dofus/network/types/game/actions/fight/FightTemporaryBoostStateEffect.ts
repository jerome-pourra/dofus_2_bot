import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTemporaryBoostEffect } from "./FightTemporaryBoostEffect";

export class FightTemporaryBoostStateEffect extends FightTemporaryBoostEffect implements INetworkType
{

	public static readonly protocolId: number = 4574;

	public stateId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightTemporaryBoostStateEffect.protocolId;
    }

    public initFightTemporaryBoostStateEffect(uid: number = 0, targetId: number = 0, turnDuration: number = 0, dispelable: number = 1, spellId: number = 0, effectId: number = 0, parentBoostUid: number = 0, delta: number = 0, stateId: number = 0): FightTemporaryBoostStateEffect
    {
        super.initFightTemporaryBoostEffect(uid,targetId,turnDuration,dispelable,spellId,effectId,parentBoostUid,delta);
        this.stateId = stateId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightTemporaryBoostStateEffect(output);
    }

    public serializeAs_FightTemporaryBoostStateEffect(output: ICustomDataOutput)
    {
        super.serializeAs_FightTemporaryBoostEffect(output);
        output.writeShort(this.stateId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTemporaryBoostStateEffect(input);
    }

    private deserializeAs_FightTemporaryBoostStateEffect(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._stateIdFunc(input);
    }

    private _stateIdFunc(input: ICustomDataInput)
    {
        this.stateId = input.readShort();
    }

}