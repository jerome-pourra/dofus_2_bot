import { GuildInformations } from "./../../../types/game/context/roleplay/GuildInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { GuildJoinedMessage } from "./GuildJoinedMessage";

export class GuildMembershipMessage extends GuildJoinedMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2644;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildMembershipMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildMembershipMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildMembershipMessage.endpointServer;
    }

    public initGuildMembershipMessage(guildInfo: GuildInformations = null, rankId: number = 0): GuildMembershipMessage
    {
        super.initGuildJoinedMessage(guildInfo,rankId);
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
        this.serializeAs_GuildMembershipMessage(output);
    }

    public serializeAs_GuildMembershipMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GuildJoinedMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildMembershipMessage(input);
    }

    private deserializeAs_GuildMembershipMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}