import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class DecraftedItemStackInfo implements INetworkType
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

    public getTypeId()
    {
        return DecraftedItemStackInfo.protocolId;
    }

    public initDecraftedItemStackInfo(objectUID: number = 0, bonusMin: number = 0, bonusMax: number = 0, runesId: Array<number> = null, runesQty: Array<number> = null): DecraftedItemStackInfo
    {
        this.objectUID = objectUID;
        this.bonusMin = bonusMin;
        this.bonusMax = bonusMax;
        this.runesId = runesId;
        this.runesQty = runesQty;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_DecraftedItemStackInfo(output);
    }

    public serializeAs_DecraftedItemStackInfo(output: ICustomDataOutput)
    {
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
        }
        output.writeVarInt(this.objectUID);
        output.writeFloat(this.bonusMin);
        output.writeFloat(this.bonusMax);
        output.writeShort(this.runesId.length);
        for(var _i4: number = 0; _i4 < this.runesId.length; _i4++)
        {
            if(this.runesId[_i4] < 0)
            {
                throw new Error("Forbidden value (" + this.runesId[_i4] + ") on element 4 (starting at 1) of runesId.");
            }
            output.writeVarInt(this.runesId[_i4]);
        }
        output.writeShort(this.runesQty.length);
        for(var _i5: number = 0; _i5 < this.runesQty.length; _i5++)
        {
            if(this.runesQty[_i5] < 0)
            {
                throw new Error("Forbidden value (" + this.runesQty[_i5] + ") on element 5 (starting at 1) of runesQty.");
            }
            output.writeVarInt(this.runesQty[_i5]);
        }
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