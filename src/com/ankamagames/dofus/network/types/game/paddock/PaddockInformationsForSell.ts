import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class PaddockInformationsForSell implements INetworkType
{

	public static readonly protocolId: number = 5311;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

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

    public getTypeId()
    {
        return PaddockInformationsForSell.protocolId;
    }

    public isEndpointClient()
    {
        return PaddockInformationsForSell.endpointClient;
    }

    public isEndpointServer()
    {
        return PaddockInformationsForSell.endpointServer;
    }

    public initPaddockInformationsForSell(guildOwner: string = "", worldX: number = 0, worldY: number = 0, subAreaId: number = 0, nbMount: number = 0, nbObject: number = 0, price: number = 0): PaddockInformationsForSell
    {
        this.guildOwner = guildOwner;
        this.worldX = worldX;
        this.worldY = worldY;
        this.subAreaId = subAreaId;
        this.nbMount = nbMount;
        this.nbObject = nbObject;
        this.price = price;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PaddockInformationsForSell(output);
    }

    public serializeAs_PaddockInformationsForSell(output: ICustomDataOutput)
    {
        output.writeUTF(this.guildOwner);
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
        }
        output.writeShort(this.worldX);
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
        }
        output.writeShort(this.worldY);
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
        }
        output.writeVarShort(this.subAreaId);
        output.writeByte(this.nbMount);
        output.writeByte(this.nbObject);
        if(this.price < 0 || this.price > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.price + ") on element price.");
        }
        output.writeVarLong(this.price);
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