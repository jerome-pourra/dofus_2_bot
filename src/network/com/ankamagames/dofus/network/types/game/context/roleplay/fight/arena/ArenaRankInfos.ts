import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../../jerakine/network/INetworkType";
import { ArenaLeagueRanking } from "./ArenaLeagueRanking";

export class ArenaRankInfos
{

	public static readonly protocolId: number = 2174;

	public arenaType: number = 3;
	public leagueRanking: ArenaLeagueRanking;
	public bestLeagueId: number = 0;
	public bestRating: number = 0;
	public dailyVictoryCount: number = 0;
	public seasonVictoryCount: number = 0;
	public dailyFightcount: number = 0;
	public seasonFightcount: number = 0;
	public numFightNeededForLadder: number = 0;

    public constructor()
    {
        this.leagueRanking = new ArenaLeagueRanking();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ArenaRankInfos(input);
    }

    private deserializeAs_ArenaRankInfos(input: ICustomDataInput)
    {
        this._arenaTypeFunc(input);
        if(input.readByte() == 0)
        {
            this.leagueRanking = null;
        }
        else
        {
            this.leagueRanking = new ArenaLeagueRanking();
            this.leagueRanking.deserialize(input);
        }
        this._bestLeagueIdFunc(input);
        this._bestRatingFunc(input);
        this._dailyVictoryCountFunc(input);
        this._seasonVictoryCountFunc(input);
        this._dailyFightcountFunc(input);
        this._seasonFightcountFunc(input);
        this._numFightNeededForLadderFunc(input);
    }

    private _arenaTypeFunc(input: ICustomDataInput)
    {
        this.arenaType = input.readInt();
        if(this.arenaType < 0)
        {
            throw new Error("Forbidden value (" + this.arenaType + ") on element of ArenaRankInfos.arenaType.");
        }
    }

    private _bestLeagueIdFunc(input: ICustomDataInput)
    {
        this.bestLeagueId = input.readVarShort();
    }

    private _bestRatingFunc(input: ICustomDataInput)
    {
        this.bestRating = input.readInt();
        if(this.bestRating < 0 || this.bestRating > 20000)
        {
            throw new Error("Forbidden value (" + this.bestRating + ") on element of ArenaRankInfos.bestRating.");
        }
    }

    private _dailyVictoryCountFunc(input: ICustomDataInput)
    {
        this.dailyVictoryCount = input.readVarUhShort();
        if(this.dailyVictoryCount < 0)
        {
            throw new Error("Forbidden value (" + this.dailyVictoryCount + ") on element of ArenaRankInfos.dailyVictoryCount.");
        }
    }

    private _seasonVictoryCountFunc(input: ICustomDataInput)
    {
        this.seasonVictoryCount = input.readVarUhShort();
        if(this.seasonVictoryCount < 0)
        {
            throw new Error("Forbidden value (" + this.seasonVictoryCount + ") on element of ArenaRankInfos.seasonVictoryCount.");
        }
    }

    private _dailyFightcountFunc(input: ICustomDataInput)
    {
        this.dailyFightcount = input.readVarUhShort();
        if(this.dailyFightcount < 0)
        {
            throw new Error("Forbidden value (" + this.dailyFightcount + ") on element of ArenaRankInfos.dailyFightcount.");
        }
    }

    private _seasonFightcountFunc(input: ICustomDataInput)
    {
        this.seasonFightcount = input.readVarUhShort();
        if(this.seasonFightcount < 0)
        {
            throw new Error("Forbidden value (" + this.seasonFightcount + ") on element of ArenaRankInfos.seasonFightcount.");
        }
    }

    private _numFightNeededForLadderFunc(input: ICustomDataInput)
    {
        this.numFightNeededForLadder = input.readShort();
        if(this.numFightNeededForLadder < 0)
        {
            throw new Error("Forbidden value (" + this.numFightNeededForLadder + ") on element of ArenaRankInfos.numFightNeededForLadder.");
        }
    }

}