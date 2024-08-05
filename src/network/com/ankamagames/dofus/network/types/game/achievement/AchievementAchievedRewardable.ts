import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { AchievementAchieved } from "./AchievementAchieved";

export class AchievementAchievedRewardable extends AchievementAchieved
{

	public static readonly protocolId: number = 9874;

	public finishedLevel: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AchievementAchievedRewardable(input);
    }

    private deserializeAs_AchievementAchievedRewardable(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._finishedLevelFunc(input);
    }

    private _finishedLevelFunc(input: ICustomDataInput)
    {
        this.finishedLevel = input.readVarUhShort();
        if(this.finishedLevel < 0 || this.finishedLevel > 200)
        {
            throw new Error("Forbidden value (" + this.finishedLevel + ") on element of AchievementAchievedRewardable.finishedLevel.");
        }
    }

}