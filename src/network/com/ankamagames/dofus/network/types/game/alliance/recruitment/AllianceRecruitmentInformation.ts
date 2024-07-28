import { SocialRecruitmentInformation } from "./../../social/recruitment/SocialRecruitmentInformation";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class AllianceRecruitmentInformation extends SocialRecruitmentInformation
{

	public static readonly protocolId: number = 4753;

    public constructor()
    {
        super();
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