import { GuildInformations } from "./../../../../types/game/context/roleplay/GuildInformations";
import { SocialApplicationInformation } from "./../../../../types/game/social/application/SocialApplicationInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GuildPlayerApplicationAbstractMessage } from "./GuildPlayerApplicationAbstractMessage";

export class GuildPlayerApplicationInformationMessage extends GuildPlayerApplicationAbstractMessage implements INetworkMessage
{

	public static readonly protocolId: number = 656;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public guildInformation: GuildInformations;
	public apply: SocialApplicationInformation;

    public constructor()
    {
        super();
        this.guildInformation = new GuildInformations();
        this.apply = new SocialApplicationInformation();
    }

    public getMessageId()
    {
        return GuildPlayerApplicationInformationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildPlayerApplicationInformationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildPlayerApplicationInformationMessage.endpointServer;
    }

    public initGuildPlayerApplicationInformationMessage(guildInformation: GuildInformations = null, apply: SocialApplicationInformation = null): GuildPlayerApplicationInformationMessage
    {
        this.guildInformation = guildInformation;
        this.apply = apply;
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
        this.serializeAs_GuildPlayerApplicationInformationMessage(output);
    }

    public serializeAs_GuildPlayerApplicationInformationMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GuildPlayerApplicationAbstractMessage(output);
        this.guildInformation.serializeAs_GuildInformations(output);
        this.apply.serializeAs_SocialApplicationInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildPlayerApplicationInformationMessage(input);
    }

    private deserializeAs_GuildPlayerApplicationInformationMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.guildInformation = new GuildInformations();
        this.guildInformation.deserialize(input);
        this.apply = new SocialApplicationInformation();
        this.apply.deserialize(input);
    }

}