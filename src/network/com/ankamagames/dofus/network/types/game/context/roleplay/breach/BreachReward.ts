import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class BreachReward
{

	public static readonly protocolId: number = 3273;

	public id: number = 0;
	public buyLocks: Array<number>;
	public buyCriterion: string = "";
	public remainingQty: number = 0;
	public price: number = 0;

    public constructor()
    {
        this.buyLocks = Array<number>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachReward(input);
    }

    private deserializeAs_BreachReward(input: ICustomDataInput)
    {
        let _val2: number = 0;
        this._idFunc(input);
        let _buyLocksLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _buyLocksLen; _i2++)
        {
            _val2 = input.readByte();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of buyLocks.");
            }
            this.buyLocks.push(_val2);
        }
        this._buyCriterionFunc(input);
        this._remainingQtyFunc(input);
        this._priceFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhInt();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of BreachReward.id.");
        }
    }

    private _buyCriterionFunc(input: ICustomDataInput)
    {
        this.buyCriterion = input.readUTF();
    }

    private _remainingQtyFunc(input: ICustomDataInput)
    {
        this.remainingQty = input.readVarInt();
    }

    private _priceFunc(input: ICustomDataInput)
    {
        this.price = input.readVarUhInt();
        if(this.price < 0)
        {
            throw new Error("Forbidden value (" + this.price + ") on element of BreachReward.price.");
        }
    }

}