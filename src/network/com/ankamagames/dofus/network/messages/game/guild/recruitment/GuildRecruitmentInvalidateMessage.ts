import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildRecruitmentInvalidateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5184;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildRecruitmentInvalidateMessage.protocolId;
    }

    public initGuildRecruitmentInvalidateMessage(): GuildRecruitmentInvalidateMessage
    {
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
        this.serializeAs_GuildRecruitmentInvalidateMessage(output);
    }

    public serializeAs_GuildRecruitmentInvalidateMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildRecruitmentInvalidateMessage(input);
    }

    private deserializeAs_GuildRecruitmentInvalidateMessage(input: ICustomDataInput)
    {

    }

}