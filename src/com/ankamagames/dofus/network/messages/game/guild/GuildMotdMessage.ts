import { SocialNoticeMessage } from "./../social/SocialNoticeMessage";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";

export class GuildMotdMessage extends SocialNoticeMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4318;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildMotdMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildMotdMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildMotdMessage.endpointServer;
    }

    public initGuildMotdMessage(content: string = "", timestamp: number = 0, memberId: number = 0, memberName: string = ""): GuildMotdMessage
    {
        super.initSocialNoticeMessage(content,timestamp,memberId,memberName);
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
        this.serializeAs_GuildMotdMessage(output);
    }

    public serializeAs_GuildMotdMessage(output: ICustomDataOutput)
    {
        super.serializeAs_SocialNoticeMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildMotdMessage(input);
    }

    private deserializeAs_GuildMotdMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}