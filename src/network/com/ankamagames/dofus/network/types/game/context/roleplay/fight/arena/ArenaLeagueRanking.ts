import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../../jerakine/network/INetworkType";

export class ArenaLeagueRanking implements INetworkType
{

	public static readonly protocolId: number = 3976;

	public rating: number = 0;
	public leagueId: number = 0;
	public ladderPosition: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return ArenaLeagueRanking.protocolId;
    }

    public initArenaLeagueRanking(rating: number = 0, leagueId: number = 0, ladderPosition: number = 0): ArenaLeagueRanking
    {
        this.rating = rating;
        this.leagueId = leagueId;
        this.ladderPosition = ladderPosition;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ArenaLeagueRanking(output);
    }

    public serializeAs_ArenaLeagueRanking(output: ICustomDataOutput)
    {
        if(this.rating < 0 || this.rating > 20000)
        {
            throw new Error("Forbidden value (" + this.rating + ") on element rating.");
        }
        output.writeInt(this.rating);
        output.writeVarShort(this.leagueId);
        output.writeInt(this.ladderPosition);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ArenaLeagueRanking(input);
    }

    private deserializeAs_ArenaLeagueRanking(input: ICustomDataInput)
    {
        this._ratingFunc(input);
        this._leagueIdFunc(input);
        this._ladderPositionFunc(input);
    }

    private _ratingFunc(input: ICustomDataInput)
    {
        this.rating = input.readInt();
        if(this.rating < 0 || this.rating > 20000)
        {
            throw new Error("Forbidden value (" + this.rating + ") on element of ArenaLeagueRanking.rating.");
        }
    }

    private _leagueIdFunc(input: ICustomDataInput)
    {
        this.leagueId = input.readVarShort();
    }

    private _ladderPositionFunc(input: ICustomDataInput)
    {
        this.ladderPosition = input.readInt();
    }

}