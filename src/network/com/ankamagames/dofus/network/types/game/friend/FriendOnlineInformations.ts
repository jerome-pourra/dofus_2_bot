import { PlayableBreedEnum } from "./../../../enums/PlayableBreedEnum";
import { AccountTagInformation } from "./../../common/AccountTagInformation";
import { PlayerStatus } from "./../character/status/PlayerStatus";
import { GuildInformations } from "./../context/roleplay/GuildInformations";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";
import { FriendInformations } from "./FriendInformations";

export class FriendOnlineInformations extends FriendInformations
{

	public static readonly protocolId: number = 9348;

	public playerId: number = 0;
	public playerName: string = "";
	public level: number = 0;
	public alignmentSide: number = 0;
	public breed: number = 0;
	public sex: boolean = false;
	public guildInfo: GuildInformations;
	public moodSmileyId: number = 0;
	public status: PlayerStatus;
	public havenBagShared: boolean = false;

    public constructor()
    {
        super();
        this.guildInfo = new GuildInformations();
        this.status = new PlayerStatus();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FriendOnlineInformations(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.sex = BooleanByteWrapper.getFlag(_box0,0);
        this.havenBagShared = BooleanByteWrapper.getFlag(_box0,1);
    }

    private deserializeAs_FriendOnlineInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.deserializeByteBoxes(input);
        this._playerIdFunc(input);
        this._playerNameFunc(input);
        this._levelFunc(input);
        this._alignmentSideFunc(input);
        this._breedFunc(input);
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(input);
        this._moodSmileyIdFunc(input);
        let _id9: number = input.readUnsignedShort();
        this.status = ProtocolTypeManager.getInstance(PlayerStatus,_id9);
        this.status.deserialize(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of FriendOnlineInformations.playerId.");
        }
    }

    private _playerNameFunc(input: ICustomDataInput)
    {
        this.playerName = input.readUTF();
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readVarUhShort();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of FriendOnlineInformations.level.");
        }
    }

    private _alignmentSideFunc(input: ICustomDataInput)
    {
        this.alignmentSide = input.readByte();
    }

    private _breedFunc(input: ICustomDataInput)
    {
        this.breed = input.readByte();
        if(this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Forgelance)
        {
            throw new Error("Forbidden value (" + this.breed + ") on element of FriendOnlineInformations.breed.");
        }
    }

    private _moodSmileyIdFunc(input: ICustomDataInput)
    {
        this.moodSmileyId = input.readVarUhShort();
        if(this.moodSmileyId < 0)
        {
            throw new Error("Forbidden value (" + this.moodSmileyId + ") on element of FriendOnlineInformations.moodSmileyId.");
        }
    }

}