import { AccountTagInformation } from "./../../common/AccountTagInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { AbstractContactInformations } from "./AbstractContactInformations";

export class FriendInformations extends AbstractContactInformations
{

	public static readonly protocolId: number = 861;

	public playerState: number = 99;
	public lastConnection: number = 0;
	public achievementPoints: number = 0;
	public leagueId: number = 0;
	public ladderPosition: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FriendInformations(input);
    }

    private deserializeAs_FriendInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerStateFunc(input);
        this._lastConnectionFunc(input);
        this._achievementPointsFunc(input);
        this._leagueIdFunc(input);
        this._ladderPositionFunc(input);
    }

    private _playerStateFunc(input: ICustomDataInput)
    {
        this.playerState = input.readByte();
        if(this.playerState < 0)
        {
            throw new Error("Forbidden value (" + this.playerState + ") on element of FriendInformations.playerState.");
        }
    }

    private _lastConnectionFunc(input: ICustomDataInput)
    {
        this.lastConnection = input.readVarUhShort();
        if(this.lastConnection < 0)
        {
            throw new Error("Forbidden value (" + this.lastConnection + ") on element of FriendInformations.lastConnection.");
        }
    }

    private _achievementPointsFunc(input: ICustomDataInput)
    {
        this.achievementPoints = input.readInt();
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