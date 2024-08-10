import { SocialRecruitmentInformation } from "./../../social/recruitment/SocialRecruitmentInformation";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class GuildRecruitmentInformation extends SocialRecruitmentInformation implements INetworkType
{

	public static readonly protocolId: number = 5578;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public minSuccess: number = 0;
	public minSuccessFacultative: boolean = false;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GuildRecruitmentInformation.protocolId;
    }

    public isEndpointClient()
    {
        return GuildRecruitmentInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildRecruitmentInformation.endpointServer;
    }

    public initGuildRecruitmentInformation(socialId: number = 0, recruitmentType: number = 0, recruitmentTitle: string = "", recruitmentText: string = "", selectedLanguages: Array<number> = null, selectedCriterion: Array<number> = null, minLevel: number = 0, minLevelFacultative: boolean = false, invalidatedByModeration: boolean = false, lastEditPlayerName: string = "", lastEditDate: number = 0, recruitmentAutoLocked: boolean = false, minSuccess: number = 0, minSuccessFacultative: boolean = false): GuildRecruitmentInformation
    {
        super.initSocialRecruitmentInformation(socialId,recruitmentType,recruitmentTitle,recruitmentText,selectedLanguages,selectedCriterion,minLevel,minLevelFacultative,invalidatedByModeration,lastEditPlayerName,lastEditDate,recruitmentAutoLocked);
        this.minSuccess = minSuccess;
        this.minSuccessFacultative = minSuccessFacultative;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildRecruitmentInformation(output);
    }

    public serializeAs_GuildRecruitmentInformation(output: ICustomDataOutput)
    {
        super.serializeAs_SocialRecruitmentInformation(output);
        if(this.minSuccess < 0)
        {
            throw new Error("Forbidden value (" + this.minSuccess + ") on element minSuccess.");
        }
        output.writeVarInt(this.minSuccess);
        output.writeBoolean(this.minSuccessFacultative);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildRecruitmentInformation(input);
    }

    private deserializeAs_GuildRecruitmentInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._minSuccessFunc(input);
        this._minSuccessFacultativeFunc(input);
    }

    private _minSuccessFunc(input: ICustomDataInput)
    {
        this.minSuccess = input.readVarUhInt();
        if(this.minSuccess < 0)
        {
            throw new Error("Forbidden value (" + this.minSuccess + ") on element of GuildRecruitmentInformation.minSuccess.");
        }
    }

    private _minSuccessFacultativeFunc(input: ICustomDataInput)
    {
        this.minSuccessFacultative = input.readBoolean();
    }

}