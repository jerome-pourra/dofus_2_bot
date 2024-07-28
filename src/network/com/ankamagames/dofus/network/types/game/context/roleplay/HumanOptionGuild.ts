import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GuildInformations } from "./GuildInformations";
import { HumanOption } from "./HumanOption";

export class HumanOptionGuild extends HumanOption
{

	public static readonly protocolId: number = 1132;

	public guildInformations: GuildInformations;

    public constructor()
    {
        super();
        this.guildInformations = new GuildInformations();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HumanOptionGuild(input);
    }

    private deserializeAs_HumanOptionGuild(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.guildInformations = new GuildInformations();
        this.guildInformations.deserialize(input);
    }

}