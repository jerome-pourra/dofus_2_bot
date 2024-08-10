import { GuildInformations } from "./../context/roleplay/GuildInformations";
import { GuildRecruitmentInformation } from "./../guild/recruitment/GuildRecruitmentInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SocialEmblem } from "./SocialEmblem";

export class GuildFactSheetInformations extends GuildInformations implements INetworkType
{

	public static readonly protocolId: number = 643;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

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

    public getTypeId()
    {
        return GuildFactSheetInformations.protocolId;
    }

    public isEndpointClient()
    {
        return GuildFactSheetInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildFactSheetInformations.endpointServer;
    }

    public initGuildFactSheetInformations(guildId: number = 0, guildName: string = "", guildLevel: number = 0, guildEmblem: SocialEmblem = null, leaderId: number = 0, nbMembers: number = 0, lastActivityDay: number = 0, recruitment: GuildRecruitmentInformation = null, nbPendingApply: number = 0): GuildFactSheetInformations
    {
        super.initGuildInformations(guildId,guildName,guildLevel,guildEmblem);
        this.leaderId = leaderId;
        this.nbMembers = nbMembers;
        this.lastActivityDay = lastActivityDay;
        this.recruitment = recruitment;
        this.nbPendingApply = nbPendingApply;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildFactSheetInformations(output);
    }

    public serializeAs_GuildFactSheetInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GuildInformations(output);
        if(this.leaderId < 0 || this.leaderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.leaderId + ") on element leaderId.");
        }
        output.writeVarLong(this.leaderId);
        if(this.nbMembers < 0)
        {
            throw new Error("Forbidden value (" + this.nbMembers + ") on element nbMembers.");
        }
        output.writeVarShort(this.nbMembers);
        if(this.lastActivityDay < 0)
        {
            throw new Error("Forbidden value (" + this.lastActivityDay + ") on element lastActivityDay.");
        }
        output.writeShort(this.lastActivityDay);
        this.recruitment.serializeAs_GuildRecruitmentInformation(output);
        if(this.nbPendingApply < 0)
        {
            throw new Error("Forbidden value (" + this.nbPendingApply + ") on element nbPendingApply.");
        }
        output.writeInt(this.nbPendingApply);
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