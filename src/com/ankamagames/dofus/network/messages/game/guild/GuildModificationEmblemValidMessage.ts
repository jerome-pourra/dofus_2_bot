import { SocialEmblem } from "./../../../types/game/social/SocialEmblem";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildModificationEmblemValidMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4735;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public guildEmblem: SocialEmblem;

    public constructor()
    {
        super();
        this.guildEmblem = new SocialEmblem();
    }

    public getMessageId()
    {
        return GuildModificationEmblemValidMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildModificationEmblemValidMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildModificationEmblemValidMessage.endpointServer;
    }

    public initGuildModificationEmblemValidMessage(guildEmblem: SocialEmblem = null): GuildModificationEmblemValidMessage
    {
        this.guildEmblem = guildEmblem;
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
        this.serializeAs_GuildModificationEmblemValidMessage(output);
    }

    public serializeAs_GuildModificationEmblemValidMessage(output: ICustomDataOutput)
    {
        this.guildEmblem.serializeAs_SocialEmblem(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildModificationEmblemValidMessage(input);
    }

    private deserializeAs_GuildModificationEmblemValidMessage(input: ICustomDataInput)
    {
        this.guildEmblem = new SocialEmblem();
        this.guildEmblem.deserialize(input);
    }

}