import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class DecraftedItemStackInfo
{

	public static readonly protocolId: number = 2478;

	public objectUID: number = 0;
	public bonusMin: number = 0;
	public bonusMax: number = 0;
	public runesId: Array<number>;
	public runesQty: Array<number>;

    public constructor()
    {
        this.runesId = Array<number>();
        this.runesQty = Array<number>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DecraftedItemStackInfo(input);
    }

    private deserializeAs_DecraftedItemStackInfo(input: ICustomDataInput)
    {
        let _val4: number = 0;
        let _val5: number = 0;
        this._objectUIDFunc(input);
        this._bonusMinFunc(input);
        this._bonusMaxFunc(input);
        let _runesIdLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _runesIdLen; _i4++)
        {
            _val4 = input.readVarUhInt();
            if(_val4 < 0)
            {
                throw new Error("Forbidden value (" + _val4 + ") on elements of runesId.");
            }
            this.runesId.push(_val4);
        }
        let _runesQtyLen: number = input.readUnsignedShort();
        for(let _i5: number = 0; _i5 < _runesQtyLen; _i5++)
        {
            _val5 = input.readVarUhInt();
            if(_val5 < 0)
            {
                throw new Error("Forbidden value (" + _val5 + ") on elements of runesQty.");
            }
            this.runesQty.push(_val5);
        }
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of DecraftedItemStackInfo.objectUID.");
        }
    }

    private _bonusMinFunc(input: ICustomDataInput)
    {
        this.bonusMin = input.readFloat();
    }

    private _bonusMaxFunc(input: ICustomDataInput)
    {
        this.bonusMax = input.readFloat();
    }

}