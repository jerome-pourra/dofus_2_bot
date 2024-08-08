import { AccountTagInformation } from "./../../common/AccountTagInformation";
import { GuildInformations } from "./../context/roleplay/GuildInformations";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { HouseInstanceInformations } from "./HouseInstanceInformations";

export class HouseGuildedInformations extends HouseInstanceInformations implements INetworkType
{

	public static readonly protocolId: number = 4071;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public guildInfo: GuildInformations;

    public constructor()
    {
        super();
        this.guildInfo = new GuildInformations();
    }

    public getTypeId()
    {
        return HouseGuildedInformations.protocolId;
    }

    public isEndpointClient()
    {
        return HouseGuildedInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return HouseGuildedInformations.endpointServer;
    }

    public initHouseGuildedInformations(instanceId: number = 0, secondHand: boolean = false, isLocked: boolean = false, ownerTag: AccountTagInformation = null, hasOwner: boolean = false, price: number = 0, isSaleLocked: boolean = false, isAdminLocked: boolean = false, guildInfo: GuildInformations = null): HouseGuildedInformations
    {
        super.initHouseInstanceInformations(instanceId,secondHand,isLocked,ownerTag,hasOwner,price,isSaleLocked,isAdminLocked);
        this.guildInfo = guildInfo;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HouseGuildedInformations(output);
    }

    public serializeAs_HouseGuildedInformations(output: ICustomDataOutput)
    {
        super.serializeAs_HouseInstanceInformations(output);
        this.guildInfo.serializeAs_GuildInformations(output);
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