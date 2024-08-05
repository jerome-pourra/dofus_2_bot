import { GuildRecruitmentInformation } from "./../../../../types/game/guild/recruitment/GuildRecruitmentInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class RecruitmentInformationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8248;

	public recruitmentData: GuildRecruitmentInformation;

    public constructor()
    {
        super();
        this.recruitmentData = new GuildRecruitmentInformation();
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
        this.deserializeAs_RecruitmentInformationMessage(input);
    }

    private deserializeAs_RecruitmentInformationMessage(input: ICustomDataInput)
    {
        this.recruitmentData = new GuildRecruitmentInformation();
        this.recruitmentData.deserialize(input);
    }

}