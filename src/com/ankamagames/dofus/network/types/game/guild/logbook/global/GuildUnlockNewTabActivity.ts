import { GuildLogbookEntryBasicInformation } from "./../GuildLogbookEntryBasicInformation";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class GuildUnlockNewTabActivity extends GuildLogbookEntryBasicInformation implements INetworkType
{

	public static readonly protocolId: number = 7681;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GuildUnlockNewTabActivity.protocolId;
    }

    public isEndpointClient()
    {
        return GuildUnlockNewTabActivity.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildUnlockNewTabActivity.endpointServer;
    }

    public initGuildUnlockNewTabActivity(id: number = 0, date: number = 0): GuildUnlockNewTabActivity
    {
        super.initGuildLogbookEntryBasicInformation(id,date);
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildUnlockNewTabActivity(output);
    }

    public serializeAs_GuildUnlockNewTabActivity(output: ICustomDataOutput)
    {
        super.serializeAs_GuildLogbookEntryBasicInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildUnlockNewTabActivity(input);
    }

    private deserializeAs_GuildUnlockNewTabActivity(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}