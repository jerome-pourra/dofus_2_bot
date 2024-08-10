import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { ObjectEffects } from "./ObjectEffects";
import { ObjectItemGenericQuantity } from "./ObjectItemGenericQuantity";

export class ObjectItemQuantityPriceDateEffects extends ObjectItemGenericQuantity implements INetworkType
{

	public static readonly protocolId: number = 3552;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public price: number = 0;
	public effects: ObjectEffects;
	public date: number = 0;

    public constructor()
    {
        super();
        this.effects = new ObjectEffects();
    }

    public getTypeId()
    {
        return ObjectItemQuantityPriceDateEffects.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectItemQuantityPriceDateEffects.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectItemQuantityPriceDateEffects.endpointServer;
    }

    public initObjectItemQuantityPriceDateEffects(objectGID: number = 0, quantity: number = 0, price: number = 0, effects: ObjectEffects = null, date: number = 0): ObjectItemQuantityPriceDateEffects
    {
        super.initObjectItemGenericQuantity(objectGID,quantity);
        this.price = price;
        this.effects = effects;
        this.date = date;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectItemQuantityPriceDateEffects(output);
    }

    public serializeAs_ObjectItemQuantityPriceDateEffects(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectItemGenericQuantity(output);
        if(this.price < 0 || this.price > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.price + ") on element price.");
        }
        output.writeVarLong(this.price);
        this.effects.serializeAs_ObjectEffects(output);
        if(this.date < 0)
        {
            throw new Error("Forbidden value (" + this.date + ") on element date.");
        }
        output.writeInt(this.date);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectItemQuantityPriceDateEffects(input);
    }

    private deserializeAs_ObjectItemQuantityPriceDateEffects(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._priceFunc(input);
        this.effects = new ObjectEffects();
        this.effects.deserialize(input);
        this._dateFunc(input);
    }

    private _priceFunc(input: ICustomDataInput)
    {
        this.price = input.readVarUhLong();
        if(this.price < 0 || this.price > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.price + ") on element of ObjectItemQuantityPriceDateEffects.price.");
        }
    }

    private _dateFunc(input: ICustomDataInput)
    {
        this.date = input.readInt();
        if(this.date < 0)
        {
            throw new Error("Forbidden value (" + this.date + ") on element of ObjectItemQuantityPriceDateEffects.date.");
        }
    }

}