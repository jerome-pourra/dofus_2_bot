import { GuildInformations } from "./../../../types/game/context/roleplay/GuildInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildInvitedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4003;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public recruterName: string = "";
	public guildInfo: GuildInformations;

    public constructor()
    {
        super();
        this.guildInfo = new GuildInformations();
    }

    public getMessageId()
    {
        return GuildInvitedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildInvitedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildInvitedMessage.endpointServer;
    }

    public initGuildInvitedMessage(recruterName: string = "", guildInfo: GuildInformations = null): GuildInvitedMessage
    {
        this.recruterName = recruterName;
        this.guildInfo = guildInfo;
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
        this.serializeAs_GuildInvitedMessage(output);
    }

    public serializeAs_GuildInvitedMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.recruterName);
        this.guildInfo.serializeAs_GuildInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildInvitedMessage(input);
    }

    private deserializeAs_GuildInvitedMessage(input: ICustomDataInput)
    {
        this._recruterNameFunc(input);
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(input);
    }

    private _recruterNameFunc(input: ICustomDataInput)
    {
        this.recruterName = input.readUTF();
    }

}