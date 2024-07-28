import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { AbstractFightDispellableEffect } from "./AbstractFightDispellableEffect";

export class FightTemporaryBoostEffect extends AbstractFightDispellableEffect
{

	public static readonly protocolId: number = 2521;

	public delta: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTemporaryBoostEffect(input);
    }

    private deserializeAs_FightTemporaryBoostEffect(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._deltaFunc(input);
    }

    private _deltaFunc(input: ICustomDataInput)
    {
        this.delta = input.readInt();
    }

}