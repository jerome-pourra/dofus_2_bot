import { PlayableBreedEnum } from "./../../../../../../enums/PlayableBreedEnum";
import { AccountTagInformation } from "./../../../../../common/AccountTagInformation";
import { AbstractContactInformations } from "./../../../../friend/AbstractContactInformations";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../../jerakine/network/INetworkType";

export class LeagueFriendInformations extends AbstractContactInformations
{

	public static readonly protocolId: number = 7750;

	public playerId: number = 0;
	public playerName: string = "";
	public breed: number = 0;
	public sex: boolean = false;
	public level: number = 0;
	public leagueId: number = 0;
	public totalLeaguePoints: number = 0;
	public ladderPosition: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_LeagueFriendInformations(input);
    }

    private deserializeAs_LeagueFriendInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerIdFunc(input);
        this._playerNameFunc(input);
        this._breedFunc(input);
        this._sexFunc(input);
        this._levelFunc(input);
        this._leagueIdFunc(input);
        this._totalLeaguePointsFunc(input);
        this._ladderPositionFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of LeagueFriendInformations.playerId.");
        }
    }

    private _playerNameFunc(input: ICustomDataInput)
    {
        this.playerName = input.readUTF();
    }

    private _breedFunc(input: ICustomDataInput)
    {
        this.breed = input.readByte();
        if(this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Forgelance)
        {
            throw new Error("Forbidden value (" + this.breed + ") on element of LeagueFriendInformations.breed.");
        }
    }

    private _sexFunc(input: ICustomDataInput)
    {
        this.sex = input.readBoolean();
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readVarUhShort();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of LeagueFriendInformations.level.");
        }
    }

    private _leagueIdFunc(input: ICustomDataInput)
    {
        this.leagueId = input.readVarShort();
    }

    private _totalLeaguePointsFunc(input: ICustomDataInput)
    {
        this.totalLeaguePoints = input.readVarShort();
    }

    private _ladderPositionFunc(input: ICustomDataInput)
    {
        this.ladderPosition = input.readInt();
    }

}