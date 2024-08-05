import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTemporaryBoostEffect } from "./FightTemporaryBoostEffect";

export class FightDetailedTemporaryBoostEffect extends FightTemporaryBoostEffect
{

	public static readonly protocolId: number = 2061;

	public param1: number = 0;
	public param2: number = 0;
	public param3: number = 0;

    public constructor()
    {
        super();
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