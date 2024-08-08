import { AllianceRecruitmentInformation } from "./../../../../types/game/alliance/recruitment/AllianceRecruitmentInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceRecruitmentInformationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 977;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

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

    public isEndpointClient()
    {
        return AllianceRecruitmentInformationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceRecruitmentInformationMessage.endpointServer;
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
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
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