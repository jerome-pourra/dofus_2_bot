import { GuildLogbookEntryBasicInformation } from "./../GuildLogbookEntryBasicInformation";
import { RankMinimalInformation } from "./../../../rank/RankMinimalInformation";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class GuildRankActivity extends GuildLogbookEntryBasicInformation
{

	public static readonly protocolId: number = 3270;

	public rankActivityType: number = 0;
	public guildRankMinimalInfos: RankMinimalInformation;

    public constructor()
    {
        super();
        this.guildRankMinimalInfos = new RankMinimalInformation();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildRankActivity(input);
    }

    private deserializeAs_GuildRankActivity(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._rankActivityTypeFunc(input);
        this.guildRankMinimalInfos = new RankMinimalInformation();
        this.guildRankMinimalInfos.deserialize(input);
    }

    private _rankActivityTypeFunc(input: ICustomDataInput)
    {
        this.rankActivityType = input.readByte();
        if(this.rankActivityType < 0)
        {
            throw new Error("Forbidden value (" + this.rankActivityType + ") on element of GuildRankActivity.rankActivityType.");
        }
    }

}