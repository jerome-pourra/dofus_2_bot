import { PlayerNote } from "./../character/guild/note/PlayerNote";
import { PlayerStatus } from "./../character/status/PlayerStatus";
import { SocialMember } from "./../social/SocialMember";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class GuildMemberInfo extends SocialMember implements INetworkType
{

	public static readonly protocolId: number = 4949;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

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

    public getTypeId()
    {
        return GuildMemberInfo.protocolId;
    }

    public isEndpointClient()
    {
        return GuildMemberInfo.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildMemberInfo.endpointServer;
    }

    public initGuildMemberInfo(id: number = 0, name: string = "", level: number = 0, breed: number = 0, sex: boolean = false, connected: number = 99, hoursSinceLastConnection: number = 0, accountId: number = 0, status: PlayerStatus = null, rankId: number = 0, enrollmentDate: number = 0, givenExperience: number = 0, experienceGivenPercent: number = 0, alignmentSide: number = 0, moodSmileyId: number = 0, achievementPoints: number = 0, havenBagShared: boolean = false, note: PlayerNote = null): GuildMemberInfo
    {
        super.initSocialMember(id,name,level,breed,sex,connected,hoursSinceLastConnection,accountId,status,rankId,enrollmentDate);
        this.givenExperience = givenExperience;
        this.experienceGivenPercent = experienceGivenPercent;
        this.alignmentSide = alignmentSide;
        this.moodSmileyId = moodSmileyId;
        this.achievementPoints = achievementPoints;
        this.havenBagShared = havenBagShared;
        this.note = note;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildMemberInfo(output);
    }

    public serializeAs_GuildMemberInfo(output: ICustomDataOutput)
    {
        super.serializeAs_SocialMember(output);
        if(this.givenExperience < 0 || this.givenExperience > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.givenExperience + ") on element givenExperience.");
        }
        output.writeVarLong(this.givenExperience);
        if(this.experienceGivenPercent < 0 || this.experienceGivenPercent > 100)
        {
            throw new Error("Forbidden value (" + this.experienceGivenPercent + ") on element experienceGivenPercent.");
        }
        output.writeByte(this.experienceGivenPercent);
        output.writeByte(this.alignmentSide);
        if(this.moodSmileyId < 0)
        {
            throw new Error("Forbidden value (" + this.moodSmileyId + ") on element moodSmileyId.");
        }
        output.writeVarShort(this.moodSmileyId);
        output.writeInt(this.achievementPoints);
        output.writeBoolean(this.havenBagShared);
        this.note.serializeAs_PlayerNote(output);
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