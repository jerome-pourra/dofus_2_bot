import { GuildInformations } from "./../context/roleplay/GuildInformations";
import { GuildRecruitmentInformation } from "./../guild/recruitment/GuildRecruitmentInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class GuildFactSheetInformations extends GuildInformations
{

	public static readonly protocolId: number = 643;

	public leaderId: number = 0;
	public nbMembers: number = 0;
	public lastActivityDay: number = 0;
	public recruitment: GuildRecruitmentInformation;
	public nbPendingApply: number = 0;

    public constructor()
    {
        super();
        this.recruitment = new GuildRecruitmentInformation();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildFactSheetInformations(input);
    }

    private deserializeAs_GuildFactSheetInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._leaderIdFunc(input);
        this._nbMembersFunc(input);
        this._lastActivityDayFunc(input);
        this.recruitment = new GuildRecruitmentInformation();
        this.recruitment.deserialize(input);
        this._nbPendingApplyFunc(input);
    }

    private _leaderIdFunc(input: ICustomDataInput)
    {
        this.leaderId = input.readVarUhLong();
        if(this.leaderId < 0 || this.leaderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.leaderId + ") on element of GuildFactSheetInformations.leaderId.");
        }
    }

    private _nbMembersFunc(input: ICustomDataInput)
    {
        this.nbMembers = input.readVarUhShort();
        if(this.nbMembers < 0)
        {
            throw new Error("Forbidden value (" + this.nbMembers + ") on element of GuildFactSheetInformations.nbMembers.");
        }
    }

    private _lastActivityDayFunc(input: ICustomDataInput)
    {
        this.lastActivityDay = input.readShort();
        if(this.lastActivityDay < 0)
        {
            throw new Error("Forbidden value (" + this.lastActivityDay + ") on element of GuildFactSheetInformations.lastActivityDay.");
        }
    }

    private _nbPendingApplyFunc(input: ICustomDataInput)
    {
        this.nbPendingApply = input.readInt();
        if(this.nbPendingApply < 0)
        {
            throw new Error("Forbidden value (" + this.nbPendingApply + ") on element of GuildFactSheetInformations.nbPendingApply.");
        }
    }

}