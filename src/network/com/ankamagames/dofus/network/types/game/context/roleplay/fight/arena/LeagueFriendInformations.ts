import { PlayableBreedEnum } from "./../../../../../../enums/PlayableBreedEnum";
import { AccountTagInformation } from "./../../../../../common/AccountTagInformation";
import { AbstractContactInformations } from "./../../../../friend/AbstractContactInformations";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../../jerakine/network/INetworkType";

export class LeagueFriendInformations extends AbstractContactInformations implements INetworkType
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

    public getTypeId()
    {
        return LeagueFriendInformations.protocolId;
    }

    public initLeagueFriendInformations(accountId: number = 0, accountTag: AccountTagInformation = null, playerId: number = 0, playerName: string = "", breed: number = 0, sex: boolean = false, level: number = 0, leagueId: number = 0, totalLeaguePoints: number = 0, ladderPosition: number = 0): LeagueFriendInformations
    {
        super.initAbstractContactInformations(accountId,accountTag);
        this.playerId = playerId;
        this.playerName = playerName;
        this.breed = breed;
        this.sex = sex;
        this.level = level;
        this.leagueId = leagueId;
        this.totalLeaguePoints = totalLeaguePoints;
        this.ladderPosition = ladderPosition;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_LeagueFriendInformations(output);
    }

    public serializeAs_LeagueFriendInformations(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractContactInformations(output);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
        output.writeUTF(this.playerName);
        output.writeByte(this.breed);
        output.writeBoolean(this.sex);
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeVarShort(this.level);
        output.writeVarShort(this.leagueId);
        output.writeVarShort(this.totalLeaguePoints);
        output.writeInt(this.ladderPosition);
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