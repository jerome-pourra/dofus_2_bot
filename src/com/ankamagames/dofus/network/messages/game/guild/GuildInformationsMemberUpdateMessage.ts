import { GuildMemberInfo } from "./../../../types/game/guild/GuildMemberInfo";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildInformationsMemberUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6708;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public member: GuildMemberInfo;

    public constructor()
    {
        super();
        this.member = new GuildMemberInfo();
    }

    public getMessageId()
    {
        return GuildInformationsMemberUpdateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildInformationsMemberUpdateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildInformationsMemberUpdateMessage.endpointServer;
    }

    public initGuildInformationsMemberUpdateMessage(member: GuildMemberInfo = null): GuildInformationsMemberUpdateMessage
    {
        this.member = member;
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
        this.serializeAs_GuildInformationsMemberUpdateMessage(output);
    }

    public serializeAs_GuildInformationsMemberUpdateMessage(output: ICustomDataOutput)
    {
        this.member.serializeAs_GuildMemberInfo(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildInformationsMemberUpdateMessage(input);
    }

    private deserializeAs_GuildInformationsMemberUpdateMessage(input: ICustomDataInput)
    {
        this.member = new GuildMemberInfo();
        this.member.deserialize(input);
    }

}