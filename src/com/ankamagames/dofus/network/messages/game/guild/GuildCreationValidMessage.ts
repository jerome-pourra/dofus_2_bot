import { SocialEmblem } from "./../../../types/game/social/SocialEmblem";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildCreationValidMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1720;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public guildName: string = "";
	public guildEmblem: SocialEmblem;

    public constructor()
    {
        super();
        this.guildEmblem = new SocialEmblem();
    }

    public getMessageId()
    {
        return GuildCreationValidMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildCreationValidMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildCreationValidMessage.endpointServer;
    }

    public initGuildCreationValidMessage(guildName: string = "", guildEmblem: SocialEmblem = null): GuildCreationValidMessage
    {
        this.guildName = guildName;
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
        this.serializeAs_GuildCreationValidMessage(output);
    }

    public serializeAs_GuildCreationValidMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.guildName);
        this.guildEmblem.serializeAs_SocialEmblem(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildCreationValidMessage(input);
    }

    private deserializeAs_GuildCreationValidMessage(input: ICustomDataInput)
    {
        this._guildNameFunc(input);
        this.guildEmblem = new SocialEmblem();
        this.guildEmblem.deserialize(input);
    }

    private _guildNameFunc(input: ICustomDataInput)
    {
        this.guildName = input.readUTF();
    }

}