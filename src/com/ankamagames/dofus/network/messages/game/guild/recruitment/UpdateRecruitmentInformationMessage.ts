import { GuildRecruitmentInformation } from "./../../../../types/game/guild/recruitment/GuildRecruitmentInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class UpdateRecruitmentInformationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 691;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public recruitmentData: GuildRecruitmentInformation;

    public constructor()
    {
        super();
        this.recruitmentData = new GuildRecruitmentInformation();
    }

    public getMessageId()
    {
        return UpdateRecruitmentInformationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return UpdateRecruitmentInformationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return UpdateRecruitmentInformationMessage.endpointServer;
    }

    public initUpdateRecruitmentInformationMessage(recruitmentData: GuildRecruitmentInformation = null): UpdateRecruitmentInformationMessage
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
        this.serializeAs_UpdateRecruitmentInformationMessage(output);
    }

    public serializeAs_UpdateRecruitmentInformationMessage(output: ICustomDataOutput)
    {
        this.recruitmentData.serializeAs_GuildRecruitmentInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_UpdateRecruitmentInformationMessage(input);
    }

    private deserializeAs_UpdateRecruitmentInformationMessage(input: ICustomDataInput)
    {
        this.recruitmentData = new GuildRecruitmentInformation();
        this.recruitmentData.deserialize(input);
    }

}