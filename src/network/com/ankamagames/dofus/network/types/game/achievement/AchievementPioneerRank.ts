import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class AchievementPioneerRank
{

	public static readonly protocolId: number = 6487;

	public achievementId: number = 0;
	public pioneerRank: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AchievementPioneerRank(input);
    }

    private deserializeAs_AchievementPioneerRank(input: ICustomDataInput)
    {
        this._achievementIdFunc(input);
        this._pioneerRankFunc(input);
    }

    private _achievementIdFunc(input: ICustomDataInput)
    {
        this.achievementId = input.readVarUhInt();
        if(this.achievementId < 0)
        {
            throw new Error("Forbidden value (" + this.achievementId + ") on element of AchievementPioneerRank.achievementId.");
        }
    }

    private _pioneerRankFunc(input: ICustomDataInput)
    {
        this.pioneerRank = input.readVarUhInt();
        if(this.pioneerRank < 0)
        {
            throw new Error("Forbidden value (" + this.pioneerRank + ") on element of AchievementPioneerRank.pioneerRank.");
        }
    }

}