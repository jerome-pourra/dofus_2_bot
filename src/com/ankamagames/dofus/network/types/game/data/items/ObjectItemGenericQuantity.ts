import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { Item } from "./Item";

export class ObjectItemGenericQuantity extends Item implements INetworkType
{

	public static readonly protocolId: number = 7294;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public objectGID: number = 0;
	public quantity: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ObjectItemGenericQuantity.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectItemGenericQuantity.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectItemGenericQuantity.endpointServer;
    }

    public initObjectItemGenericQuantity(objectGID: number = 0, quantity: number = 0): ObjectItemGenericQuantity
    {
        this.objectGID = objectGID;
        this.quantity = quantity;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectItemGenericQuantity(output);
    }

    public serializeAs_ObjectItemGenericQuantity(output: ICustomDataOutput)
    {
        super.serializeAs_Item(output);
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
        }
        output.writeVarInt(this.objectGID);
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
        }
        output.writeVarInt(this.quantity);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectItemGenericQuantity(input);
    }

    private deserializeAs_ObjectItemGenericQuantity(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._objectGIDFunc(input);
        this._quantityFunc(input);
    }

    private _objectGIDFunc(input: ICustomDataInput)
    {
        this.objectGID = input.readVarUhInt();
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of ObjectItemGenericQuantity.objectGID.");
        }
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarUhInt();
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectItemGenericQuantity.quantity.");
        }
    }

}