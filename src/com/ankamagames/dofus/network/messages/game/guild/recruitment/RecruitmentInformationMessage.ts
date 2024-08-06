import { GuildRecruitmentInformation } from "./../../../../types/game/guild/recruitment/GuildRecruitmentInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class RecruitmentInformationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8248;

	public recruitmentData: GuildRecruitmentInformation;

    public constructor()
    {
        super();
        this.recruitmentData = new GuildRecruitmentInformation();
    }

    public getMessageId()
    {
        return RecruitmentInformationMessage.protocolId;
    }

    public initRecruitmentInformationMessage(recruitmentData: GuildRecruitmentInformation = null): RecruitmentInformationMessage
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
        this.serializeAs_RecruitmentInformationMessage(output);
    }

    public serializeAs_RecruitmentInformationMessage(output: ICustomDataOutput)
    {
        this.recruitmentData.serializeAs_GuildRecruitmentInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_RecruitmentInformationMessage(input);
    }

    private deserializeAs_RecruitmentInformationMessage(input: ICustomDataInput)
    {
        this.recruitmentData = new GuildRecruitmentInformation();
        this.recruitmentData.deserialize(input);
    }

}