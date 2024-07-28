import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { AbstractFightDispellableEffect } from "./AbstractFightDispellableEffect";

export class FightTriggeredEffect extends AbstractFightDispellableEffect
{

	public static readonly protocolId: number = 5487;

	public param1: number = 0;
	public param2: number = 0;
	public param3: number = 0;
	public delay: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTriggeredEffect(input);
    }

    private deserializeAs_FightTriggeredEffect(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._param1Func(input);
        this._param2Func(input);
        this._param3Func(input);
        this._delayFunc(input);
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

    private _delayFunc(input: ICustomDataInput)
    {
        this.delay = input.readShort();
    }

}