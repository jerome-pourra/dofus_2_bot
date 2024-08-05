import { ObjectEffect } from "./effects/ObjectEffect";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { ObjectItemMinimalInformation } from "./ObjectItemMinimalInformation";

export class ObjectItemToSellInNpcShop extends ObjectItemMinimalInformation
{

	public static readonly protocolId: number = 5301;

	public objectPrice: number = 0;
	public buyCriterion: string = "";

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectItemToSellInNpcShop(input);
    }

    private deserializeAs_ObjectItemToSellInNpcShop(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._objectPriceFunc(input);
        this._buyCriterionFunc(input);
    }

    private _objectPriceFunc(input: ICustomDataInput)
    {
        this.objectPrice = input.readVarUhLong();
        if(this.objectPrice < 0 || this.objectPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.objectPrice + ") on element of ObjectItemToSellInNpcShop.objectPrice.");
        }
    }

    private _buyCriterionFunc(input: ICustomDataInput)
    {
        this.buyCriterion = input.readUTF();
    }

}