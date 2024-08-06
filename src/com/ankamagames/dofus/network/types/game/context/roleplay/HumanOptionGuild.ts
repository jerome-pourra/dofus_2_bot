import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GuildInformations } from "./GuildInformations";
import { HumanOption } from "./HumanOption";

export class HumanOptionGuild extends HumanOption implements INetworkType
{

	public static readonly protocolId: number = 1132;

	public guildInformations: GuildInformations;

    public constructor()
    {
        super();
        this.guildInformations = new GuildInformations();
    }

    public getTypeId()
    {
        return HumanOptionGuild.protocolId;
    }

    public initHumanOptionGuild(guildInformations: GuildInformations = null): HumanOptionGuild
    {
        this.guildInformations = guildInformations;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HumanOptionGuild(output);
    }

    public serializeAs_HumanOptionGuild(output: ICustomDataOutput)
    {
        super.serializeAs_HumanOption(output);
        this.guildInformations.serializeAs_GuildInformations(output);
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