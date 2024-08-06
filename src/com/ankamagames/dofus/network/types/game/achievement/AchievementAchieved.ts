import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class AchievementAchieved implements INetworkType
{

	public static readonly protocolId: number = 6607;

	public id: number = 0;
	public achievedBy: number = 0;
	public achievedPioneerRank: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return AchievementAchieved.protocolId;
    }

    public initAchievementAchieved(id: number = 0, achievedBy: number = 0, achievedPioneerRank: number = 0): AchievementAchieved
    {
        this.id = id;
        this.achievedBy = achievedBy;
        this.achievedPioneerRank = achievedPioneerRank;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AchievementAchieved(output);
    }

    public serializeAs_AchievementAchieved(output: ICustomDataOutput)
    {
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarShort(this.id);
        if(this.achievedBy < 0 || this.achievedBy > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.achievedBy + ") on element achievedBy.");
        }
        output.writeVarLong(this.achievedBy);
        if(this.achievedPioneerRank < 0)
        {
            throw new Error("Forbidden value (" + this.achievedPioneerRank + ") on element achievedPioneerRank.");
        }
        output.writeVarInt(this.achievedPioneerRank);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AchievementAchieved(input);
    }

    private deserializeAs_AchievementAchieved(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._achievedByFunc(input);
        this._achievedPioneerRankFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhShort();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of AchievementAchieved.id.");
        }
    }

    private _achievedByFunc(input: ICustomDataInput)
    {
        this.achievedBy = input.readVarUhLong();
        if(this.achievedBy < 0 || this.achievedBy > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.achievedBy + ") on element of AchievementAchieved.achievedBy.");
        }
    }

    private _achievedPioneerRankFunc(input: ICustomDataInput)
    {
        this.achievedPioneerRank = input.readVarUhInt();
        if(this.achievedPioneerRank < 0)
        {
            throw new Error("Forbidden value (" + this.achievedPioneerRank + ") on element of AchievementAchieved.achievedPioneerRank.");
        }
    }

}