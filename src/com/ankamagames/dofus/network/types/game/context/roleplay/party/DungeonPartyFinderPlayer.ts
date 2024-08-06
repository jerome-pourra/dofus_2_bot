import { PlayableBreedEnum } from "./../../../../../enums/PlayableBreedEnum";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class DungeonPartyFinderPlayer implements INetworkType
{

	public static readonly protocolId: number = 1061;

	public playerId: number = 0;
	public playerName: string = "";
	public breed: number = 0;
	public sex: boolean = false;
	public level: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return DungeonPartyFinderPlayer.protocolId;
    }

    public initDungeonPartyFinderPlayer(playerId: number = 0, playerName: string = "", breed: number = 0, sex: boolean = false, level: number = 0): DungeonPartyFinderPlayer
    {
        this.playerId = playerId;
        this.playerName = playerName;
        this.breed = breed;
        this.sex = sex;
        this.level = level;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_DungeonPartyFinderPlayer(output);
    }

    public serializeAs_DungeonPartyFinderPlayer(output: ICustomDataOutput)
    {
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
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DungeonPartyFinderPlayer(input);
    }

    private deserializeAs_DungeonPartyFinderPlayer(input: ICustomDataInput)
    {
        this._playerIdFunc(input);
        this._playerNameFunc(input);
        this._breedFunc(input);
        this._sexFunc(input);
        this._levelFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of DungeonPartyFinderPlayer.playerId.");
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
            throw new Error("Forbidden value (" + this.breed + ") on element of DungeonPartyFinderPlayer.breed.");
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
            throw new Error("Forbidden value (" + this.level + ") on element of DungeonPartyFinderPlayer.level.");
        }
    }

}