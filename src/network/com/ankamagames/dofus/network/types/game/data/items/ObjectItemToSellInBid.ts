import { ObjectEffect } from "./effects/ObjectEffect";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { ObjectItemToSell } from "./ObjectItemToSell";

export class ObjectItemToSellInBid extends ObjectItemToSell
{

	public static readonly protocolId: number = 859;

	public unsoldDelay: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectItemToSellInBid(input);
    }

    private deserializeAs_ObjectItemToSellInBid(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._unsoldDelayFunc(input);
    }

    private _unsoldDelayFunc(input: ICustomDataInput)
    {
        this.unsoldDelay = input.readInt();
        if(this.unsoldDelay < 0)
        {
            throw new Error("Forbidden value (" + this.unsoldDelay + ") on element of ObjectItemToSellInBid.unsoldDelay.");
        }
    }

}