import { PlayableBreedEnum } from "./../../../../../enums/PlayableBreedEnum";
import { PlayerStatus } from "./../../../character/status/PlayerStatus";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class JobCrafterDirectoryEntryPlayerInfo
{

	public static readonly protocolId: number = 9204;

	public playerId: number = 0;
	public playerName: string = "";
	public alignmentSide: number = 0;
	public breed: number = 0;
	public sex: boolean = false;
	public isInWorkshop: boolean = false;
	public worldX: number = 0;
	public worldY: number = 0;
	public mapId: number = 0;
	public subAreaId: number = 0;
	public canCraftLegendary: boolean = false;
	public status: PlayerStatus;

    public constructor()
    {
        this.status = new PlayerStatus();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobCrafterDirectoryEntryPlayerInfo(input);
    }

    private deserializeAs_JobCrafterDirectoryEntryPlayerInfo(input: ICustomDataInput)
    {
        this._playerIdFunc(input);
        this._playerNameFunc(input);
        this._alignmentSideFunc(input);
        this._breedFunc(input);
        this._sexFunc(input);
        this._isInWorkshopFunc(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
        this._mapIdFunc(input);
        this._subAreaIdFunc(input);
        this._canCraftLegendaryFunc(input);
        let _id12: number = input.readUnsignedShort();
        this.status = ProtocolTypeManager.getInstance(PlayerStatus,_id12);
        this.status.deserialize(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of JobCrafterDirectoryEntryPlayerInfo.playerId.");
        }
    }

    private _playerNameFunc(input: ICustomDataInput)
    {
        this.playerName = input.readUTF();
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
            throw new Error("Forbidden value (" + this.breed + ") on element of JobCrafterDirectoryEntryPlayerInfo.breed.");
        }
    }

    private _sexFunc(input: ICustomDataInput)
    {
        this.sex = input.readBoolean();
    }

    private _isInWorkshopFunc(input: ICustomDataInput)
    {
        this.isInWorkshop = input.readBoolean();
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of JobCrafterDirectoryEntryPlayerInfo.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of JobCrafterDirectoryEntryPlayerInfo.worldY.");
        }
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of JobCrafterDirectoryEntryPlayerInfo.mapId.");
        }
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of JobCrafterDirectoryEntryPlayerInfo.subAreaId.");
        }
    }

    private _canCraftLegendaryFunc(input: ICustomDataInput)
    {
        this.canCraftLegendary = input.readBoolean();
    }

}