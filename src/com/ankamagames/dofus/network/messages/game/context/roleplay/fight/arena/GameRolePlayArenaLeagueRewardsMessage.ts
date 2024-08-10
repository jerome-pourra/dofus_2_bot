import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayArenaLeagueRewardsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7599;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public seasonId: number = 0;
	public leagueId: number = 0;
	public ladderPosition: number = 0;
	public endSeasonReward: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayArenaLeagueRewardsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayArenaLeagueRewardsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayArenaLeagueRewardsMessage.endpointServer;
    }

    public initGameRolePlayArenaLeagueRewardsMessage(seasonId: number = 0, leagueId: number = 0, ladderPosition: number = 0, endSeasonReward: boolean = false): GameRolePlayArenaLeagueRewardsMessage
    {
        this.seasonId = seasonId;
        this.leagueId = leagueId;
        this.ladderPosition = ladderPosition;
        this.endSeasonReward = endSeasonReward;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayArenaLeagueRewardsMessage(output);
    }

    public serializeAs_GameRolePlayArenaLeagueRewardsMessage(output: ICustomDataOutput)
    {
        if(this.seasonId < 0)
        {
            throw new Error("Forbidden value (" + this.seasonId + ") on element seasonId.");
        }
        output.writeVarShort(this.seasonId);
        if(this.leagueId < 0)
        {
            throw new Error("Forbidden value (" + this.leagueId + ") on element leagueId.");
        }
        output.writeVarShort(this.leagueId);
        output.writeInt(this.ladderPosition);
        output.writeBoolean(this.endSeasonReward);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayArenaLeagueRewardsMessage(input);
    }

    private deserializeAs_GameRolePlayArenaLeagueRewardsMessage(input: ICustomDataInput)
    {
        this._seasonIdFunc(input);
        this._leagueIdFunc(input);
        this._ladderPositionFunc(input);
        this._endSeasonRewardFunc(input);
    }

    private _seasonIdFunc(input: ICustomDataInput)
    {
        this.seasonId = input.readVarUhShort();
        if(this.seasonId < 0)
        {
            throw new Error("Forbidden value (" + this.seasonId + ") on element of GameRolePlayArenaLeagueRewardsMessage.seasonId.");
        }
    }

    private _leagueIdFunc(input: ICustomDataInput)
    {
        this.leagueId = input.readVarUhShort();
        if(this.leagueId < 0)
        {
            throw new Error("Forbidden value (" + this.leagueId + ") on element of GameRolePlayArenaLeagueRewardsMessage.leagueId.");
        }
    }

    private _ladderPositionFunc(input: ICustomDataInput)
    {
        this.ladderPosition = input.readInt();
    }

    private _endSeasonRewardFunc(input: ICustomDataInput)
    {
        this.endSeasonReward = input.readBoolean();
    }

}