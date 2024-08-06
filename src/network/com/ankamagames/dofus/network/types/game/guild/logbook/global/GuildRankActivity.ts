import { GuildLogbookEntryBasicInformation } from "./../GuildLogbookEntryBasicInformation";
import { RankMinimalInformation } from "./../../../rank/RankMinimalInformation";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class GuildRankActivity extends GuildLogbookEntryBasicInformation implements INetworkType
{

	public static readonly protocolId: number = 3270;

	public rankActivityType: number = 0;
	public guildRankMinimalInfos: RankMinimalInformation;

    public constructor()
    {
        super();
        this.guildRankMinimalInfos = new RankMinimalInformation();
    }

    public getTypeId()
    {
        return GuildRankActivity.protocolId;
    }

    public initGuildRankActivity(id: number = 0, date: number = 0, rankActivityType: number = 0, guildRankMinimalInfos: RankMinimalInformation = null): GuildRankActivity
    {
        super.initGuildLogbookEntryBasicInformation(id,date);
        this.rankActivityType = rankActivityType;
        this.guildRankMinimalInfos = guildRankMinimalInfos;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildRankActivity(output);
    }

    public serializeAs_GuildRankActivity(output: ICustomDataOutput)
    {
        super.serializeAs_GuildLogbookEntryBasicInformation(output);
        output.writeByte(this.rankActivityType);
        this.guildRankMinimalInfos.serializeAs_RankMinimalInformation(output);
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