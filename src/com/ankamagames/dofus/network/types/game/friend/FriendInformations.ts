import { AccountTagInformation } from "./../../common/AccountTagInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { AbstractContactInformations } from "./AbstractContactInformations";

export class FriendInformations extends AbstractContactInformations implements INetworkType
{

	public static readonly protocolId: number = 861;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public playerState: number = 99;
	public lastConnection: number = 0;
	public achievementPoints: number = 0;
	public leagueId: number = 0;
	public ladderPosition: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FriendInformations.protocolId;
    }

    public isEndpointClient()
    {
        return FriendInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return FriendInformations.endpointServer;
    }

    public initFriendInformations(accountId: number = 0, accountTag: AccountTagInformation = null, playerState: number = 99, lastConnection: number = 0, achievementPoints: number = 0, leagueId: number = 0, ladderPosition: number = 0): FriendInformations
    {
        super.initAbstractContactInformations(accountId,accountTag);
        this.playerState = playerState;
        this.lastConnection = lastConnection;
        this.achievementPoints = achievementPoints;
        this.leagueId = leagueId;
        this.ladderPosition = ladderPosition;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FriendInformations(output);
    }

    public serializeAs_FriendInformations(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractContactInformations(output);
        output.writeByte(this.playerState);
        if(this.lastConnection < 0)
        {
            throw new Error("Forbidden value (" + this.lastConnection + ") on element lastConnection.");
        }
        output.writeVarShort(this.lastConnection);
        output.writeInt(this.achievementPoints);
        output.writeVarShort(this.leagueId);
        output.writeInt(this.ladderPosition);
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