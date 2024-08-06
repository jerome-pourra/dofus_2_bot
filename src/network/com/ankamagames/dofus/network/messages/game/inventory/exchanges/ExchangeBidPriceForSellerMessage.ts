import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeBidPriceMessage } from "./ExchangeBidPriceMessage";

export class ExchangeBidPriceForSellerMessage extends ExchangeBidPriceMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7209;

	public allIdentical: boolean = false;
	public minimalPrices: Array<number>;

    public constructor()
    {
        super();
        this.minimalPrices = Array<number>();
    }

    public getMessageId()
    {
        return ExchangeBidPriceForSellerMessage.protocolId;
    }

    public initExchangeBidPriceForSellerMessage(genericId: number = 0, averagePrice: number = 0, allIdentical: boolean = false, minimalPrices: Array<number> = null): ExchangeBidPriceForSellerMessage
    {
        super.initExchangeBidPriceMessage(genericId,averagePrice);
        this.allIdentical = allIdentical;
        this.minimalPrices = minimalPrices;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangeBidPriceForSellerMessage(output);
    }

    public serializeAs_ExchangeBidPriceForSellerMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeBidPriceMessage(output);
        output.writeBoolean(this.allIdentical);
        output.writeShort(this.minimalPrices.length);
        for(var _i2: number = 0; _i2 < this.minimalPrices.length; _i2++)
        {
            if(this.minimalPrices[_i2] < 0 || this.minimalPrices[_i2] > 9007199254740992)
            {
                throw new Error("Forbidden value (" + this.minimalPrices[_i2] + ") on element 2 (starting at 1) of minimalPrices.");
            }
            output.writeVarLong(this.minimalPrices[_i2]);
        }
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