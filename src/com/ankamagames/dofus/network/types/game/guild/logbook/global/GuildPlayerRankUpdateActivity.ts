import { GuildLogbookEntryBasicInformation } from "./../GuildLogbookEntryBasicInformation";
import { RankMinimalInformation } from "./../../../rank/RankMinimalInformation";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class GuildPlayerRankUpdateActivity extends GuildLogbookEntryBasicInformation implements INetworkType
{

	public static readonly protocolId: number = 8680;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

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

    public getTypeId()
    {
        return GuildPlayerRankUpdateActivity.protocolId;
    }

    public isEndpointClient()
    {
        return GuildPlayerRankUpdateActivity.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildPlayerRankUpdateActivity.endpointServer;
    }

    public initGuildPlayerRankUpdateActivity(id: number = 0, date: number = 0, guildRankMinimalInfos: RankMinimalInformation = null, sourcePlayerId: number = 0, targetPlayerId: number = 0, sourcePlayerName: string = "", targetPlayerName: string = ""): GuildPlayerRankUpdateActivity
    {
        super.initGuildLogbookEntryBasicInformation(id,date);
        this.guildRankMinimalInfos = guildRankMinimalInfos;
        this.sourcePlayerId = sourcePlayerId;
        this.targetPlayerId = targetPlayerId;
        this.sourcePlayerName = sourcePlayerName;
        this.targetPlayerName = targetPlayerName;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildPlayerRankUpdateActivity(output);
    }

    public serializeAs_GuildPlayerRankUpdateActivity(output: ICustomDataOutput)
    {
        super.serializeAs_GuildLogbookEntryBasicInformation(output);
        this.guildRankMinimalInfos.serializeAs_RankMinimalInformation(output);
        if(this.sourcePlayerId < 0 || this.sourcePlayerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sourcePlayerId + ") on element sourcePlayerId.");
        }
        output.writeVarLong(this.sourcePlayerId);
        if(this.targetPlayerId < 0 || this.targetPlayerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetPlayerId + ") on element targetPlayerId.");
        }
        output.writeVarLong(this.targetPlayerId);
        output.writeUTF(this.sourcePlayerName);
        output.writeUTF(this.targetPlayerName);
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