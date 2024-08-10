import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { Item } from "./Item";

export class ObjectItemQuantity extends Item implements INetworkType
{

	public static readonly protocolId: number = 5434;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public objectUID: number = 0;
	public quantity: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ObjectItemQuantity.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectItemQuantity.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectItemQuantity.endpointServer;
    }

    public initObjectItemQuantity(objectUID: number = 0, quantity: number = 0): ObjectItemQuantity
    {
        this.objectUID = objectUID;
        this.quantity = quantity;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectItemQuantity(output);
    }

    public serializeAs_ObjectItemQuantity(output: ICustomDataOutput)
    {
        super.serializeAs_Item(output);
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
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectItemQuantity(input);
    }

    private deserializeAs_ObjectItemQuantity(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._objectUIDFunc(input);
        this._quantityFunc(input);
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectItemQuantity.objectUID.");
        }
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarUhInt();
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectItemQuantity.quantity.");
        }
    }

}