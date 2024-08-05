import { SocialEmblem } from "./../../social/SocialEmblem";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BasicGuildInformations } from "./BasicGuildInformations";

export class GuildInformations extends BasicGuildInformations
{

	public static readonly protocolId: number = 7929;

	public guildEmblem: SocialEmblem;

    public constructor()
    {
        super();
        this.guildEmblem = new SocialEmblem();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildInformations(input);
    }

    private deserializeAs_GuildInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.guildEmblem = new SocialEmblem();
        this.guildEmblem.deserialize(input);
    }

}