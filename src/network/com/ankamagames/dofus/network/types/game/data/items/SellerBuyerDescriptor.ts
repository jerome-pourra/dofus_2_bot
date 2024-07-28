import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class SellerBuyerDescriptor
{

	public static readonly protocolId: number = 780;

	public quantities: Array<number>;
	public types: Array<number>;
	public taxPercentage: number = 0;
	public taxModificationPercentage: number = 0;
	public maxItemLevel: number = 0;
	public maxItemPerAccount: number = 0;
	public npcContextualId: number = 0;
	public unsoldDelay: number = 0;

    public constructor()
    {
        this.quantities = Array<number>();
        this.types = Array<number>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SellerBuyerDescriptor(input);
    }

    private deserializeAs_SellerBuyerDescriptor(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _val2: number = 0;
        let _quantitiesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _quantitiesLen; _i1++)
        {
            _val1 = input.readVarUhInt();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of quantities.");
            }
            this.quantities.push(_val1);
        }
        let _typesLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _typesLen; _i2++)
        {
            _val2 = input.readVarUhInt();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of types.");
            }
            this.types.push(_val2);
        }
        this._taxPercentageFunc(input);
        this._taxModificationPercentageFunc(input);
        this._maxItemLevelFunc(input);
        this._maxItemPerAccountFunc(input);
        this._npcContextualIdFunc(input);
        this._unsoldDelayFunc(input);
    }

    private _taxPercentageFunc(input: ICustomDataInput)
    {
        this.taxPercentage = input.readFloat();
    }

    private _taxModificationPercentageFunc(input: ICustomDataInput)
    {
        this.taxModificationPercentage = input.readFloat();
    }

    private _maxItemLevelFunc(input: ICustomDataInput)
    {
        this.maxItemLevel = input.readUnsignedByte();
        if(this.maxItemLevel < 0 || this.maxItemLevel > 255)
        {
            throw new Error("Forbidden value (" + this.maxItemLevel + ") on element of SellerBuyerDescriptor.maxItemLevel.");
        }
    }

    private _maxItemPerAccountFunc(input: ICustomDataInput)
    {
        this.maxItemPerAccount = input.readVarUhInt();
        if(this.maxItemPerAccount < 0)
        {
            throw new Error("Forbidden value (" + this.maxItemPerAccount + ") on element of SellerBuyerDescriptor.maxItemPerAccount.");
        }
    }

    private _npcContextualIdFunc(input: ICustomDataInput)
    {
        this.npcContextualId = input.readInt();
    }

    private _unsoldDelayFunc(input: ICustomDataInput)
    {
        this.unsoldDelay = input.readVarUhShort();
        if(this.unsoldDelay < 0)
        {
            throw new Error("Forbidden value (" + this.unsoldDelay + ") on element of SellerBuyerDescriptor.unsoldDelay.");
        }
    }

}