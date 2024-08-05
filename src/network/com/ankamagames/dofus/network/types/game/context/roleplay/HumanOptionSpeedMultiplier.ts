import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanOption } from "./HumanOption";

export class HumanOptionSpeedMultiplier extends HumanOption
{

	public static readonly protocolId: number = 4364;

	public speedMultiplier: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HumanOptionSpeedMultiplier(input);
    }

    private deserializeAs_HumanOptionSpeedMultiplier(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._speedMultiplierFunc(input);
    }

    private _speedMultiplierFunc(input: ICustomDataInput)
    {
        this.speedMultiplier = input.readVarUhInt();
        if(this.speedMultiplier < 0)
        {
            throw new Error("Forbidden value (" + this.speedMultiplier + ") on element of HumanOptionSpeedMultiplier.speedMultiplier.");
        }
    }

}