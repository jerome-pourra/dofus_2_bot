import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class AchievementPioneerRank implements INetworkType
{

	public static readonly protocolId: number = 6487;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public achievementId: number = 0;
	public pioneerRank: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return AchievementPioneerRank.protocolId;
    }

    public isEndpointClient()
    {
        return AchievementPioneerRank.endpointClient;
    }

    public isEndpointServer()
    {
        return AchievementPioneerRank.endpointServer;
    }

    public initAchievementPioneerRank(achievementId: number = 0, pioneerRank: number = 0): AchievementPioneerRank
    {
        this.achievementId = achievementId;
        this.pioneerRank = pioneerRank;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AchievementPioneerRank(output);
    }

    public serializeAs_AchievementPioneerRank(output: ICustomDataOutput)
    {
        if(this.achievementId < 0)
        {
            throw new Error("Forbidden value (" + this.achievementId + ") on element achievementId.");
        }
        output.writeVarInt(this.achievementId);
        if(this.pioneerRank < 0)
        {
            throw new Error("Forbidden value (" + this.pioneerRank + ") on element pioneerRank.");
        }
        output.writeVarInt(this.pioneerRank);
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