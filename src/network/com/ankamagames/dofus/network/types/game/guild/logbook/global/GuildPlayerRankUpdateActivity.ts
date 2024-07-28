import { GuildLogbookEntryBasicInformation } from "./../GuildLogbookEntryBasicInformation";
import { RankMinimalInformation } from "./../../../rank/RankMinimalInformation";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class GuildPlayerRankUpdateActivity extends GuildLogbookEntryBasicInformation
{

	public static readonly protocolId: number = 8680;

	public guildRankMinimalInfos: RankMinimalInformation;
	public sourcePlayerId: number = 0;
	public targetPlayerId: number = 0;
	public sourcePlayerName: string = "";
	public targetPlayerName: string = "";

    public constructor()
    {
        super();
        this.guildRankMinimalInfos = new RankMinimalInformation();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildPlayerRankUpdateActivity(input);
    }

    private deserializeAs_GuildPlayerRankUpdateActivity(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.guildRankMinimalInfos = new RankMinimalInformation();
        this.guildRankMinimalInfos.deserialize(input);
        this._sourcePlayerIdFunc(input);
        this._targetPlayerIdFunc(input);
        this._sourcePlayerNameFunc(input);
        this._targetPlayerNameFunc(input);
    }

    private _sourcePlayerIdFunc(input: ICustomDataInput)
    {
        this.sourcePlayerId = input.readVarUhLong();
        if(this.sourcePlayerId < 0 || this.sourcePlayerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sourcePlayerId + ") on element of GuildPlayerRankUpdateActivity.sourcePlayerId.");
        }
    }

    private _targetPlayerIdFunc(input: ICustomDataInput)
    {
        this.targetPlayerId = input.readVarUhLong();
        if(this.targetPlayerId < 0 || this.targetPlayerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetPlayerId + ") on element of GuildPlayerRankUpdateActivity.targetPlayerId.");
        }
    }

    private _sourcePlayerNameFunc(input: ICustomDataInput)
    {
        this.sourcePlayerName = input.readUTF();
    }

    private _targetPlayerNameFunc(input: ICustomDataInput)
    {
        this.targetPlayerName = input.readUTF();
    }

}