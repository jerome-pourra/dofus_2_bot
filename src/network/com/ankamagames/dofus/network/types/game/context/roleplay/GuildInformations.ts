import { SocialEmblem } from "./../../social/SocialEmblem";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BasicGuildInformations } from "./BasicGuildInformations";

export class GuildInformations extends BasicGuildInformations implements INetworkType
{

	public static readonly protocolId: number = 7929;

	public guildEmblem: SocialEmblem;

    public constructor()
    {
        super();
        this.guildEmblem = new SocialEmblem();
    }

    public getTypeId()
    {
        return GuildInformations.protocolId;
    }

    public initGuildInformations(guildId: number = 0, guildName: string = "", guildLevel: number = 0, guildEmblem: SocialEmblem = null): GuildInformations
    {
        super.initBasicGuildInformations(guildId,guildName,guildLevel);
        this.guildEmblem = guildEmblem;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildInformations(output);
    }

    public serializeAs_GuildInformations(output: ICustomDataOutput)
    {
        super.serializeAs_BasicGuildInformations(output);
        this.guildEmblem.serializeAs_SocialEmblem(output);
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