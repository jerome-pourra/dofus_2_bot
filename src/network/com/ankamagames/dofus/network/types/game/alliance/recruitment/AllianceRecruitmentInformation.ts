import { SocialRecruitmentInformation } from "./../../social/recruitment/SocialRecruitmentInformation";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class AllianceRecruitmentInformation extends SocialRecruitmentInformation implements INetworkType
{

	public static readonly protocolId: number = 4753;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return AllianceRecruitmentInformation.protocolId;
    }

    public initAllianceRecruitmentInformation(socialId: number = 0, recruitmentType: number = 0, recruitmentTitle: string = "", recruitmentText: string = "", selectedLanguages: Array<number> = null, selectedCriterion: Array<number> = null, minLevel: number = 0, minLevelFacultative: boolean = false, invalidatedByModeration: boolean = false, lastEditPlayerName: string = "", lastEditDate: number = 0, recruitmentAutoLocked: boolean = false): AllianceRecruitmentInformation
    {
        super.initSocialRecruitmentInformation(socialId,recruitmentType,recruitmentTitle,recruitmentText,selectedLanguages,selectedCriterion,minLevel,minLevelFacultative,invalidatedByModeration,lastEditPlayerName,lastEditDate,recruitmentAutoLocked);
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AllianceRecruitmentInformation(output);
    }

    public serializeAs_AllianceRecruitmentInformation(output: ICustomDataOutput)
    {
        super.serializeAs_SocialRecruitmentInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceRecruitmentInformation(input);
    }

    private deserializeAs_AllianceRecruitmentInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}