import { PlayableBreedEnum } from "./../../../enums/PlayableBreedEnum";
import { AccountTagInformation } from "./../../common/AccountTagInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { IgnoredInformations } from "./IgnoredInformations";

export class IgnoredOnlineInformations extends IgnoredInformations
{

	public static readonly protocolId: number = 941;

	public playerId: number = 0;
	public playerName: string = "";
	public breed: number = 0;
	public sex: boolean = false;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IgnoredOnlineInformations(input);
    }

    private deserializeAs_IgnoredOnlineInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerIdFunc(input);
        this._playerNameFunc(input);
        this._breedFunc(input);
        this._sexFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of IgnoredOnlineInformations.playerId.");
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
            throw new Error("Forbidden value (" + this.breed + ") on element of IgnoredOnlineInformations.breed.");
        }
    }

    private _sexFunc(input: ICustomDataInput)
    {
        this.sex = input.readBoolean();
    }

}