import { ObjectEffect } from "./effects/ObjectEffect";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class BidExchangerObjectInfo
{

	public static readonly protocolId: number = 2811;

	public objectUID: number = 0;
	public objectGID: number = 0;
	public objectType: number = 0;
	public effects: Array<ObjectEffect>;
	public prices: Array<number>;

    public constructor()
    {
        this.effects = Array<ObjectEffect>();
        this.prices = Array<number>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BidExchangerObjectInfo(input);
    }

    private deserializeAs_BidExchangerObjectInfo(input: ICustomDataInput)
    {
        let _id4: number = 0;
        let _item4: ObjectEffect;
        let _val5: number = NaN;
        this._objectUIDFunc(input);
        this._objectGIDFunc(input);
        this._objectTypeFunc(input);
        let _effectsLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _effectsLen; _i4++)
        {
            _id4 = input.readUnsignedShort();
            _item4 = ProtocolTypeManager.getInstance(ObjectEffect,_id4);
            _item4.deserialize(input);
            this.effects.push(_item4);
        }
        let _pricesLen: number = input.readUnsignedShort();
        for(let _i5: number = 0; _i5 < _pricesLen; _i5++)
        {
            _val5 = input.readVarUhLong();
            if(_val5 < 0 || _val5 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val5 + ") on elements of prices.");
            }
            this.prices.push(_val5);
        }
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of BidExchangerObjectInfo.objectUID.");
        }
    }

    private _objectGIDFunc(input: ICustomDataInput)
    {
        this.objectGID = input.readVarUhInt();
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of BidExchangerObjectInfo.objectGID.");
        }
    }

    private _objectTypeFunc(input: ICustomDataInput)
    {
        this.objectType = input.readInt();
        if(this.objectType < 0)
        {
            throw new Error("Forbidden value (" + this.objectType + ") on element of BidExchangerObjectInfo.objectType.");
        }
    }

}