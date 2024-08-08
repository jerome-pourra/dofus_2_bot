import { ObjectEffect } from "./effects/ObjectEffect";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { Item } from "./Item";

export class ObjectItemToSell extends Item implements INetworkType
{

	public static readonly protocolId: number = 9372;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public objectGID: number = 0;
	public effects: Array<ObjectEffect>;
	public objectUID: number = 0;
	public quantity: number = 0;
	public objectPrice: number = 0;

    public constructor()
    {
        super();
        this.effects = Array<ObjectEffect>();
    }

    public getTypeId()
    {
        return ObjectItemToSell.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectItemToSell.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectItemToSell.endpointServer;
    }

    public initObjectItemToSell(objectGID: number = 0, effects: Array<ObjectEffect> = null, objectUID: number = 0, quantity: number = 0, objectPrice: number = 0): ObjectItemToSell
    {
        this.objectGID = objectGID;
        this.effects = effects;
        this.objectUID = objectUID;
        this.quantity = quantity;
        this.objectPrice = objectPrice;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectItemToSell(output);
    }

    public serializeAs_ObjectItemToSell(output: ICustomDataOutput)
    {
        super.serializeAs_Item(output);
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
        }
        output.writeVarInt(this.objectGID);
        output.writeShort(this.effects.length);
        for(var _i2: number = 0; _i2 < this.effects.length; _i2++)
        {
            output.writeShort((this.effects[_i2] as ObjectEffect).getTypeId());
            (this.effects[_i2] as ObjectEffect).serialize(output);
        }
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
        }
        output.writeVarInt(this.objectUID);
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
        }
        output.writeVarInt(this.quantity);
        if(this.objectPrice < 0 || this.objectPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.objectPrice + ") on element objectPrice.");
        }
        output.writeVarLong(this.objectPrice);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectItemToSell(input);
    }

    private deserializeAs_ObjectItemToSell(input: ICustomDataInput)
    {
        let _id2: number = 0;
        let _item2: ObjectEffect;
        super.deserialize(input);
        this._objectGIDFunc(input);
        let _effectsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _effectsLen; _i2++)
        {
            _id2 = input.readUnsignedShort();
            _item2 = ProtocolTypeManager.getInstance(ObjectEffect,_id2);
            _item2.deserialize(input);
            this.effects.push(_item2);
        }
        this._objectUIDFunc(input);
        this._quantityFunc(input);
        this._objectPriceFunc(input);
    }

    private _objectGIDFunc(input: ICustomDataInput)
    {
        this.objectGID = input.readVarUhInt();
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of ObjectItemToSell.objectGID.");
        }
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectItemToSell.objectUID.");
        }
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarUhInt();
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectItemToSell.quantity.");
        }
    }

    private _objectPriceFunc(input: ICustomDataInput)
    {
        this.objectPrice = input.readVarUhLong();
        if(this.objectPrice < 0 || this.objectPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.objectPrice + ") on element of ObjectItemToSell.objectPrice.");
        }
    }

}