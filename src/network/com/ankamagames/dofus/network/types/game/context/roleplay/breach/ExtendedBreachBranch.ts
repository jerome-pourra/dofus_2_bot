import { MonsterInGroupLightInformations } from "./../MonsterInGroupLightInformations";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { BreachReward } from "./BreachReward";
import { BreachBranch } from "./BreachBranch";

export class ExtendedBreachBranch extends BreachBranch
{

	public static readonly protocolId: number = 8307;

	public rewards: Array<BreachReward>;
	public modifier: number = 0;
	public prize: number = 0;

    public constructor()
    {
        super();
        this.rewards = Array<BreachReward>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExtendedBreachBranch(input);
    }

    private deserializeAs_ExtendedBreachBranch(input: ICustomDataInput)
    {
        let _item1: BreachReward;
        super.deserialize(input);
        let _rewardsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _rewardsLen; _i1++)
        {
            _item1 = new BreachReward();
            _item1.deserialize(input);
            this.rewards.push(_item1);
        }
        this._modifierFunc(input);
        this._prizeFunc(input);
    }

    private _modifierFunc(input: ICustomDataInput)
    {
        this.modifier = input.readVarInt();
    }

    private _prizeFunc(input: ICustomDataInput)
    {
        this.prize = input.readVarUhInt();
        if(this.prize < 0)
        {
            throw new Error("Forbidden value (" + this.prize + ") on element of ExtendedBreachBranch.prize.");
        }
    }

}