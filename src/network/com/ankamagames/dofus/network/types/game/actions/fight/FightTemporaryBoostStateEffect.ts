import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTemporaryBoostEffect } from "./FightTemporaryBoostEffect";

export class FightTemporaryBoostStateEffect extends FightTemporaryBoostEffect
{

	public static readonly protocolId: number = 4574;

	public stateId: number = 0;

    public constructor()
    {
        super();
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