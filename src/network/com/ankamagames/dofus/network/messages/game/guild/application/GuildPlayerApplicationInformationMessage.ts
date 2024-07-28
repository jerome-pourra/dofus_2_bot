import { GuildInformations } from "./../../../../types/game/context/roleplay/GuildInformations";
import { SocialApplicationInformation } from "./../../../../types/game/social/application/SocialApplicationInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GuildPlayerApplicationAbstractMessage } from "./GuildPlayerApplicationAbstractMessage";

export class GuildPlayerApplicationInformationMessage extends GuildPlayerApplicationAbstractMessage
{

	public static readonly protocolId: number = 656;

	public guildInformation: GuildInformations;
	public apply: SocialApplicationInformation;

    public constructor()
    {
        super();
        this.guildInformation = new GuildInformations();
        this.apply = new SocialApplicationInformation();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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