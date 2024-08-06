import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTemporaryBoostEffect } from "./FightTemporaryBoostEffect";

export class FightDetailedTemporaryBoostEffect extends FightTemporaryBoostEffect implements INetworkType
{

	public static readonly protocolId: number = 2061;

	public param1: number = 0;
	public param2: number = 0;
	public param3: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightDetailedTemporaryBoostEffect.protocolId;
    }

    public initFightDetailedTemporaryBoostEffect(uid: number = 0, targetId: number = 0, turnDuration: number = 0, dispelable: number = 1, spellId: number = 0, effectId: number = 0, parentBoostUid: number = 0, delta: number = 0, param1: number = 0, param2: number = 0, param3: number = 0): FightDetailedTemporaryBoostEffect
    {
        super.initFightTemporaryBoostEffect(uid,targetId,turnDuration,dispelable,spellId,effectId,parentBoostUid,delta);
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightDetailedTemporaryBoostEffect(output);
    }

    public serializeAs_FightDetailedTemporaryBoostEffect(output: ICustomDataOutput)
    {
        super.serializeAs_FightTemporaryBoostEffect(output);
        output.writeInt(this.param1);
        output.writeInt(this.param2);
        output.writeInt(this.param3);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightDetailedTemporaryBoostEffect(input);
    }

    private deserializeAs_FightDetailedTemporaryBoostEffect(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._param1Func(input);
        this._param2Func(input);
        this._param3Func(input);
    }

    private _param1Func(input: ICustomDataInput)
    {
        this.param1 = input.readInt();
    }

    private _param2Func(input: ICustomDataInput)
    {
        this.param2 = input.readInt();
    }

    private _param3Func(input: ICustomDataInput)
    {
        this.param3 = input.readInt();
    }

}