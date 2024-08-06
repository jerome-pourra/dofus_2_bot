import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { AchievementAchieved } from "./AchievementAchieved";

export class AchievementAchievedRewardable extends AchievementAchieved implements INetworkType
{

	public static readonly protocolId: number = 9874;

	public finishedLevel: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return AchievementAchievedRewardable.protocolId;
    }

    public initAchievementAchievedRewardable(id: number = 0, achievedBy: number = 0, achievedPioneerRank: number = 0, finishedLevel: number = 0): AchievementAchievedRewardable
    {
        super.initAchievementAchieved(id,achievedBy,achievedPioneerRank);
        this.finishedLevel = finishedLevel;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AchievementAchievedRewardable(output);
    }

    public serializeAs_AchievementAchievedRewardable(output: ICustomDataOutput)
    {
        super.serializeAs_AchievementAchieved(output);
        if(this.finishedLevel < 0 || this.finishedLevel > 200)
        {
            throw new Error("Forbidden value (" + this.finishedLevel + ") on element finishedLevel.");
        }
        output.writeVarShort(this.finishedLevel);
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