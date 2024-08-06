import { SocialNoticeSetErrorMessage } from "./../social/SocialNoticeSetErrorMessage";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";

export class GuildMotdSetErrorMessage extends SocialNoticeSetErrorMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6422;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildMotdSetErrorMessage.protocolId;
    }

    public initGuildMotdSetErrorMessage(reason: number = 0): GuildMotdSetErrorMessage
    {
        super.initSocialNoticeSetErrorMessage(reason);
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
        this.serializeAs_GuildMotdSetErrorMessage(output);
    }

    public serializeAs_GuildMotdSetErrorMessage(output: ICustomDataOutput)
    {
        super.serializeAs_SocialNoticeSetErrorMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildMotdSetErrorMessage(input);
    }

    private deserializeAs_GuildMotdSetErrorMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}