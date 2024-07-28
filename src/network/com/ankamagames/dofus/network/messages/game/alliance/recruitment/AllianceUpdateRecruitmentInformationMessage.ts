import { AllianceRecruitmentInformation } from "./../../../../types/game/alliance/recruitment/AllianceRecruitmentInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceUpdateRecruitmentInformationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5387;

	public recruitmentData: AllianceRecruitmentInformation;

    public constructor()
    {
        super();
        this.recruitmentData = new AllianceRecruitmentInformation();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceUpdateRecruitmentInformationMessage(input);
    }

    private deserializeAs_AllianceUpdateRecruitmentInformationMessage(input: ICustomDataInput)
    {
        this.recruitmentData = new AllianceRecruitmentInformation();
        this.recruitmentData.deserialize(input);
    }

}