import { AccountTagInformation } from "./../../common/AccountTagInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class HouseInformationsForSell
{

	public static readonly protocolId: number = 6977;

	public instanceId: number = 0;
	public secondHand: boolean = false;
	public modelId: number = 0;
	public ownerTag: AccountTagInformation;
	public hasOwner: boolean = false;
	public ownerCharacterName: string = "";
	public worldX: number = 0;
	public worldY: number = 0;
	public subAreaId: number = 0;
	public nbRoom: number = 0;
	public nbChest: number = 0;
	public skillListIds: Array<number>;
	public isLocked: boolean = false;
	public price: number = 0;

    public constructor()
    {
        this.ownerTag = new AccountTagInformation();
        this.skillListIds = Array<number>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseInformationsForSell(input);
    }

    private deserializeAs_HouseInformationsForSell(input: ICustomDataInput)
    {
        let _val12: number = 0;
        this._instanceIdFunc(input);
        this._secondHandFunc(input);
        this._modelIdFunc(input);
        this.ownerTag = new AccountTagInformation();
        this.ownerTag.deserialize(input);
        this._hasOwnerFunc(input);
        this._ownerCharacterNameFunc(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
        this._subAreaIdFunc(input);
        this._nbRoomFunc(input);
        this._nbChestFunc(input);
        let _skillListIdsLen: number = input.readUnsignedShort();
        for(let _i12: number = 0; _i12 < _skillListIdsLen; _i12++)
        {
            _val12 = input.readInt();
            this.skillListIds.push(_val12);
        }
        this._isLockedFunc(input);
        this._priceFunc(input);
    }

    private _instanceIdFunc(input: ICustomDataInput)
    {
        this.instanceId = input.readInt();
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element of HouseInformationsForSell.instanceId.");
        }
    }

    private _secondHandFunc(input: ICustomDataInput)
    {
        this.secondHand = input.readBoolean();
    }

    private _modelIdFunc(input: ICustomDataInput)
    {
        this.modelId = input.readVarUhInt();
        if(this.modelId < 0)
        {
            throw new Error("Forbidden value (" + this.modelId + ") on element of HouseInformationsForSell.modelId.");
        }
    }

    private _hasOwnerFunc(input: ICustomDataInput)
    {
        this.hasOwner = input.readBoolean();
    }

    private _ownerCharacterNameFunc(input: ICustomDataInput)
    {
        this.ownerCharacterName = input.readUTF();
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of HouseInformationsForSell.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of HouseInformationsForSell.worldY.");
        }
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of HouseInformationsForSell.subAreaId.");
        }
    }

    private _nbRoomFunc(input: ICustomDataInput)
    {
        this.nbRoom = input.readByte();
    }

    private _nbChestFunc(input: ICustomDataInput)
    {
        this.nbChest = input.readByte();
    }

    private _isLockedFunc(input: ICustomDataInput)
    {
        this.isLocked = input.readBoolean();
    }

    private _priceFunc(input: ICustomDataInput)
    {
        this.price = input.readVarUhLong();
        if(this.price < 0 || this.price > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.price + ") on element of HouseInformationsForSell.price.");
        }
    }

}