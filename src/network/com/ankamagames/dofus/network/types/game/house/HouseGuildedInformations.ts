import { AccountTagInformation } from "./../../common/AccountTagInformation";
import { GuildInformations } from "./../context/roleplay/GuildInformations";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { HouseInstanceInformations } from "./HouseInstanceInformations";

export class HouseGuildedInformations extends HouseInstanceInformations
{

	public static readonly protocolId: number = 4071;

	public guildInfo: GuildInformations;

    public constructor()
    {
        super();
        this.guildInfo = new GuildInformations();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseGuildedInformations(input);
    }

    private deserializeAs_HouseGuildedInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(input);
    }

}