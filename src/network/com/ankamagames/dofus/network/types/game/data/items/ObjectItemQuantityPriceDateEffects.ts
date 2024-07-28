import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { ObjectEffects } from "./ObjectEffects";
import { ObjectItemGenericQuantity } from "./ObjectItemGenericQuantity";

export class ObjectItemQuantityPriceDateEffects extends ObjectItemGenericQuantity
{

	public static readonly protocolId: number = 3552;

	public price: number = 0;
	public effects: ObjectEffects;
	public date: number = 0;

    public constructor()
    {
        super();
        this.effects = new ObjectEffects();
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