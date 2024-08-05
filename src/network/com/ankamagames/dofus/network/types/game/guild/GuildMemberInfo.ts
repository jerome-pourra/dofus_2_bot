import { PlayerNote } from "./../character/guild/note/PlayerNote";
import { PlayerStatus } from "./../character/status/PlayerStatus";
import { SocialMember } from "./../social/SocialMember";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class GuildMemberInfo extends SocialMember
{

	public static readonly protocolId: number = 4949;

	public givenExperience: number = 0;
	public experienceGivenPercent: number = 0;
	public alignmentSide: number = 0;
	public moodSmileyId: number = 0;
	public achievementPoints: number = 0;
	public havenBagShared: boolean = false;
	public note: PlayerNote;

    public constructor()
    {
        super();
        this.note = new PlayerNote();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildMemberInfo(input);
    }

    private deserializeAs_GuildMemberInfo(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._givenExperienceFunc(input);
        this._experienceGivenPercentFunc(input);
        this._alignmentSideFunc(input);
        this._moodSmileyIdFunc(input);
        this._achievementPointsFunc(input);
        this._havenBagSharedFunc(input);
        this.note = new PlayerNote();
        this.note.deserialize(input);
    }

    private _givenExperienceFunc(input: ICustomDataInput)
    {
        this.givenExperience = input.readVarUhLong();
        if(this.givenExperience < 0 || this.givenExperience > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.givenExperience + ") on element of GuildMemberInfo.givenExperience.");
        }
    }

    private _experienceGivenPercentFunc(input: ICustomDataInput)
    {
        this.experienceGivenPercent = input.readByte();
        if(this.experienceGivenPercent < 0 || this.experienceGivenPercent > 100)
        {
            throw new Error("Forbidden value (" + this.experienceGivenPercent + ") on element of GuildMemberInfo.experienceGivenPercent.");
        }
    }

    private _alignmentSideFunc(input: ICustomDataInput)
    {
        this.alignmentSide = input.readByte();
    }

    private _moodSmileyIdFunc(input: ICustomDataInput)
    {
        this.moodSmileyId = input.readVarUhShort();
        if(this.moodSmileyId < 0)
        {
            throw new Error("Forbidden value (" + this.moodSmileyId + ") on element of GuildMemberInfo.moodSmileyId.");
        }
    }

    private _achievementPointsFunc(input: ICustomDataInput)
    {
        this.achievementPoints = input.readInt();
    }

    private _havenBagSharedFunc(input: ICustomDataInput)
    {
        this.havenBagShared = input.readBoolean();
    }

}