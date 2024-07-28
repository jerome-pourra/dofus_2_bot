import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeBidPriceMessage } from "./ExchangeBidPriceMessage";

export class ExchangeBidPriceForSellerMessage extends ExchangeBidPriceMessage
{

	public static readonly protocolId: number = 7209;

	public allIdentical: boolean = false;
	public minimalPrices: Array<number>;

    public constructor()
    {
        super();
        this.minimalPrices = Array<number>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeBidPriceForSellerMessage(input);
    }

    private deserializeAs_ExchangeBidPriceForSellerMessage(input: ICustomDataInput)
    {
        let _val2: number = NaN;
        super.deserialize(input);
        this._allIdenticalFunc(input);
        let _minimalPricesLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _minimalPricesLen; _i2++)
        {
            _val2 = input.readVarUhLong();
            if(_val2 < 0 || _val2 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of minimalPrices.");
            }
            this.minimalPrices.push(_val2);
        }
    }

    private _allIdenticalFunc(input: ICustomDataInput)
    {
        this.allIdentical = input.readBoolean();
    }

}