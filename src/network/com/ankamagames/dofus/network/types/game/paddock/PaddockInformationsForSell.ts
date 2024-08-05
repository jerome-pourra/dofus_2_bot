import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class PaddockInformationsForSell
{

	public static readonly protocolId: number = 5311;

	public guildOwner: string = "";
	public worldX: number = 0;
	public worldY: number = 0;
	public subAreaId: number = 0;
	public nbMount: number = 0;
	public nbObject: number = 0;
	public price: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaddockInformationsForSell(input);
    }

    private deserializeAs_PaddockInformationsForSell(input: ICustomDataInput)
    {
        this._guildOwnerFunc(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
        this._subAreaIdFunc(input);
        this._nbMountFunc(input);
        this._nbObjectFunc(input);
        this._priceFunc(input);
    }

    private _guildOwnerFunc(input: ICustomDataInput)
    {
        this.guildOwner = input.readUTF();
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of PaddockInformationsForSell.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of PaddockInformationsForSell.worldY.");
        }
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of PaddockInformationsForSell.subAreaId.");
        }
    }

    private _nbMountFunc(input: ICustomDataInput)
    {
        this.nbMount = input.readByte();
    }

    private _nbObjectFunc(input: ICustomDataInput)
    {
        this.nbObject = input.readByte();
    }

    private _priceFunc(input: ICustomDataInput)
    {
        this.price = input.readVarUhLong();
        if(this.price < 0 || this.price > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.price + ") on element of PaddockInformationsForSell.price.");
        }
    }

}