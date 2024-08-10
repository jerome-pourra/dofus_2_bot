import { SocialNoticeSetErrorMessage } from "./../social/SocialNoticeSetErrorMessage";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";

export class GuildBulletinSetErrorMessage extends SocialNoticeSetErrorMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8324;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildBulletinSetErrorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildBulletinSetErrorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildBulletinSetErrorMessage.endpointServer;
    }

    public initGuildBulletinSetErrorMessage(reason: number = 0): GuildBulletinSetErrorMessage
    {
        super.initSocialNoticeSetErrorMessage(reason);
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
        this.serializeAs_GuildBulletinSetErrorMessage(output);
    }

    public serializeAs_GuildBulletinSetErrorMessage(output: ICustomDataOutput)
    {
        super.serializeAs_SocialNoticeSetErrorMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildBulletinSetErrorMessage(input);
    }

    private deserializeAs_GuildBulletinSetErrorMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}