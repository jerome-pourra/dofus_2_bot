import { AllianceRecruitmentInformation } from "./../../../../types/game/alliance/recruitment/AllianceRecruitmentInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceRecruitmentInformationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 977;

	public recruitmentData: AllianceRecruitmentInformation;

    public constructor()
    {
        super();
        this.recruitmentData = new AllianceRecruitmentInformation();
    }

    public getMessageId()
    {
        return AllianceRecruitmentInformationMessage.protocolId;
    }

    public initAllianceRecruitmentInformationMessage(recruitmentData: AllianceRecruitmentInformation = null): AllianceRecruitmentInformationMessage
    {
        this.recruitmentData = recruitmentData;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AllianceRecruitmentInformationMessage(output);
    }

    public serializeAs_AllianceRecruitmentInformationMessage(output: ICustomDataOutput)
    {
        this.recruitmentData.serializeAs_AllianceRecruitmentInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceRecruitmentInformationMessage(input);
    }

    private deserializeAs_AllianceRecruitmentInformationMessage(input: ICustomDataInput)
    {
        this.recruitmentData = new AllianceRecruitmentInformation();
        this.recruitmentData.deserialize(input);
    }

}