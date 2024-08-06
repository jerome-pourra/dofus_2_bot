import { ObjectEffect } from "./effects/ObjectEffect";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { ObjectItemToSell } from "./ObjectItemToSell";

export class ObjectItemToSellInBid extends ObjectItemToSell implements INetworkType
{

	public static readonly protocolId: number = 859;

	public unsoldDelay: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ObjectItemToSellInBid.protocolId;
    }

    public initObjectItemToSellInBid(objectGID: number = 0, effects: Array<ObjectEffect> = null, objectUID: number = 0, quantity: number = 0, objectPrice: number = 0, unsoldDelay: number = 0): ObjectItemToSellInBid
    {
        super.initObjectItemToSell(objectGID,effects,objectUID,quantity,objectPrice);
        this.unsoldDelay = unsoldDelay;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectItemToSellInBid(output);
    }

    public serializeAs_ObjectItemToSellInBid(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectItemToSell(output);
        if(this.unsoldDelay < 0)
        {
            throw new Error("Forbidden value (" + this.unsoldDelay + ") on element unsoldDelay.");
        }
        output.writeInt(this.unsoldDelay);
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