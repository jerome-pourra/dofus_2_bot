import { PlayableBreedEnum } from "./../../../../enums/PlayableBreedEnum";
import { PlayerStatus } from "./../../character/status/PlayerStatus";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class ApplicationPlayerInformation
{

	public static readonly protocolId: number = 9959;

	public playerId: number = 0;
	public playerName: string = "";
	public breed: number = 0;
	public sex: boolean = false;
	public level: number = 0;
	public accountId: number = 0;
	public accountTag: string = "";
	public accountNickname: string = "";
	public status: PlayerStatus;

    public constructor()
    {
        this.status = new PlayerStatus();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ApplicationPlayerInformation(input);
    }

    private deserializeAs_ApplicationPlayerInformation(input: ICustomDataInput)
    {
        this._playerIdFunc(input);
        this._playerNameFunc(input);
        this._breedFunc(input);
        this._sexFunc(input);
        this._levelFunc(input);
        this._accountIdFunc(input);
        this._accountTagFunc(input);
        this._accountNicknameFunc(input);
        this.status = new PlayerStatus();
        this.status.deserialize(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of ApplicationPlayerInformation.playerId.");
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
            throw new Error("Forbidden value (" + this.breed + ") on element of ApplicationPlayerInformation.breed.");
        }
    }

    private _sexFunc(input: ICustomDataInput)
    {
        this.sex = input.readBoolean();
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readVarUhInt();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of ApplicationPlayerInformation.level.");
        }
    }

    private _accountIdFunc(input: ICustomDataInput)
    {
        this.accountId = input.readVarUhInt();
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element of ApplicationPlayerInformation.accountId.");
        }
    }

    private _accountTagFunc(input: ICustomDataInput)
    {
        this.accountTag = input.readUTF();
    }

    private _accountNicknameFunc(input: ICustomDataInput)
    {
        this.accountNickname = input.readUTF();
    }

}