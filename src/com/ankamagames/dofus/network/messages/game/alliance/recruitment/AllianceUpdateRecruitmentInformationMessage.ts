import { AllianceRecruitmentInformation } from "./../../../../types/game/alliance/recruitment/AllianceRecruitmentInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceUpdateRecruitmentInformationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5387;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public recruitmentData: AllianceRecruitmentInformation;

    public constructor()
    {
        super();
        this.recruitmentData = new AllianceRecruitmentInformation();
    }

    public getMessageId()
    {
        return AllianceUpdateRecruitmentInformationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceUpdateRecruitmentInformationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceUpdateRecruitmentInformationMessage.endpointServer;
    }

    public initAllianceUpdateRecruitmentInformationMessage(recruitmentData: AllianceRecruitmentInformation = null): AllianceUpdateRecruitmentInformationMessage
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
        this.serializeAs_AllianceUpdateRecruitmentInformationMessage(output);
    }

    public serializeAs_AllianceUpdateRecruitmentInformationMessage(output: ICustomDataOutput)
    {
        this.recruitmentData.serializeAs_AllianceRecruitmentInformation(output);
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