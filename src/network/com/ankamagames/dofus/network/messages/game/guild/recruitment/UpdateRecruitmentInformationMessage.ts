import { GuildRecruitmentInformation } from "./../../../../types/game/guild/recruitment/GuildRecruitmentInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class UpdateRecruitmentInformationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 691;

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
        this.deserializeAs_UpdateRecruitmentInformationMessage(input);
    }

    private deserializeAs_UpdateRecruitmentInformationMessage(input: ICustomDataInput)
    {
        this.recruitmentData = new GuildRecruitmentInformation();
        this.recruitmentData.deserialize(input);
    }

}