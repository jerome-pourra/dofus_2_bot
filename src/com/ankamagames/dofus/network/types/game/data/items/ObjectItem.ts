import { ObjectEffect } from "./effects/ObjectEffect";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { Item } from "./Item";

export class ObjectItem extends Item implements INetworkType
{

	public static readonly protocolId: number = 1685;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public position: number = 63;
	public objectGID: number = 0;
	public effects: Array<ObjectEffect>;
	public objectUID: number = 0;
	public quantity: number = 0;
	public favorite: boolean = false;

    public constructor()
    {
        super();
        this.effects = Array<ObjectEffect>();
    }

    public getTypeId()
    {
        return ObjectItem.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectItem.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectItem.endpointServer;
    }

    public initObjectItem(position: number = 63, objectGID: number = 0, effects: Array<ObjectEffect> = null, objectUID: number = 0, quantity: number = 0, favorite: boolean = false): ObjectItem
    {
        this.position = position;
        this.objectGID = objectGID;
        this.effects = effects;
        this.objectUID = objectUID;
        this.quantity = quantity;
        this.favorite = favorite;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectItem(output);
    }

    public serializeAs_ObjectItem(output: ICustomDataOutput)
    {
        super.serializeAs_Item(output);
        output.writeShort(this.position);
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
        }
        output.writeVarInt(this.objectGID);
        output.writeShort(this.effects.length);
        for(var _i3: number = 0; _i3 < this.effects.length; _i3++)
        {
            output.writeShort((this.effects[_i3] as ObjectEffect).getTypeId());
            (this.effects[_i3] as ObjectEffect).serialize(output);
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
        output.writeBoolean(this.favorite);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectItem(input);
    }

    private deserializeAs_ObjectItem(input: ICustomDataInput)
    {
        let _id3: number = 0;
        let _item3: ObjectEffect;
        super.deserialize(input);
        this._positionFunc(input);
        this._objectGIDFunc(input);
        let _effectsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _effectsLen; _i3++)
        {
            _id3 = input.readUnsignedShort();
            _item3 = ProtocolTypeManager.getInstance(ObjectEffect,_id3);
            _item3.deserialize(input);
            this.effects.push(_item3);
        }
        this._objectUIDFunc(input);
        this._quantityFunc(input);
        this._favoriteFunc(input);
    }

    private _positionFunc(input: ICustomDataInput)
    {
        this.position = input.readShort();
        if(this.position < 0)
        {
            throw new Error("Forbidden value (" + this.position + ") on element of ObjectItem.position.");
        }
    }

    private _objectGIDFunc(input: ICustomDataInput)
    {
        this.objectGID = input.readVarUhInt();
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of ObjectItem.objectGID.");
        }
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectItem.objectUID.");
        }
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarUhInt();
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectItem.quantity.");
        }
    }

    private _favoriteFunc(input: ICustomDataInput)
    {
        this.favorite = input.readBoolean();
    }

}