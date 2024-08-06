import { MonsterInGroupLightInformations } from "./../MonsterInGroupLightInformations";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { BreachReward } from "./BreachReward";
import { ExtendedBreachBranch } from "./ExtendedBreachBranch";

export class ExtendedLockedBreachBranch extends ExtendedBreachBranch implements INetworkType
{

	public static readonly protocolId: number = 4080;

	public unlockPrice: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ExtendedLockedBreachBranch.protocolId;
    }

    public initExtendedLockedBreachBranch(room: number = 0, element: number = 0, bosses: Array<MonsterInGroupLightInformations> = null, map: number = 0, score: number = 0, relativeScore: number = 0, monsters: Array<MonsterInGroupLightInformations> = null, rewards: Array<BreachReward> = null, modifier: number = 0, prize: number = 0, unlockPrice: number = 0): ExtendedLockedBreachBranch
    {
        super.initExtendedBreachBranch(room,element,bosses,map,score,relativeScore,monsters,rewards,modifier,prize);
        this.unlockPrice = unlockPrice;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExtendedLockedBreachBranch(output);
    }

    public serializeAs_ExtendedLockedBreachBranch(output: ICustomDataOutput)
    {
        super.serializeAs_ExtendedBreachBranch(output);
        if(this.unlockPrice < 0)
        {
            throw new Error("Forbidden value (" + this.unlockPrice + ") on element unlockPrice.");
        }
        output.writeVarInt(this.unlockPrice);
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