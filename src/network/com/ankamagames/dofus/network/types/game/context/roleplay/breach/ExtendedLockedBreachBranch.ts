import { MonsterInGroupLightInformations } from "./../MonsterInGroupLightInformations";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ExtendedBreachBranch } from "./ExtendedBreachBranch";

export class ExtendedLockedBreachBranch extends ExtendedBreachBranch
{

	public static readonly protocolId: number = 4080;

	public unlockPrice: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExtendedLockedBreachBranch(input);
    }

    private deserializeAs_ExtendedLockedBreachBranch(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._unlockPriceFunc(input);
    }

    private _unlockPriceFunc(input: ICustomDataInput)
    {
        this.unlockPrice = input.readVarUhInt();
        if(this.unlockPrice < 0)
        {
            throw new Error("Forbidden value (" + this.unlockPrice + ") on element of ExtendedLockedBreachBranch.unlockPrice.");
        }
    }

}