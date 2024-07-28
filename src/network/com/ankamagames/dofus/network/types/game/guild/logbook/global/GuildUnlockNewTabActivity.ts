import { GuildLogbookEntryBasicInformation } from "./../GuildLogbookEntryBasicInformation";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class GuildUnlockNewTabActivity extends GuildLogbookEntryBasicInformation
{

	public static readonly protocolId: number = 7681;

    public constructor()
    {
        super();
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