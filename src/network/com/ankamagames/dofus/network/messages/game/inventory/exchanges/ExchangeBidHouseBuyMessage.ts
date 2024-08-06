import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHouseBuyMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3820;

	public uid: number = 0;
	public qty: number = 0;
	public price: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeBidHouseBuyMessage.protocolId;
    }

    public initExchangeBidHouseBuyMessage(uid: number = 0, qty: number = 0, price: number = 0): ExchangeBidHouseBuyMessage
    {
        this.uid = uid;
        this.qty = qty;
        this.price = price;
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
        this.serializeAs_ExchangeBidHouseBuyMessage(output);
    }

    public serializeAs_ExchangeBidHouseBuyMessage(output: ICustomDataOutput)
    {
        if(this.uid < 0)
        {
            throw new Error("Forbidden value (" + this.uid + ") on element uid.");
        }
        output.writeVarInt(this.uid);
        if(this.qty < 0)
        {
            throw new Error("Forbidden value (" + this.qty + ") on element qty.");
        }
        output.writeVarInt(this.qty);
        if(this.price < 0 || this.price > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.price + ") on element price.");
        }
        output.writeVarLong(this.price);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeBidHouseBuyMessage(input);
    }

    private deserializeAs_ExchangeBidHouseBuyMessage(input: ICustomDataInput)
    {
        this._uidFunc(input);
        this._qtyFunc(input);
        this._priceFunc(input);
    }

    private _uidFunc(input: ICustomDataInput)
    {
        this.uid = input.readVarUhInt();
        if(this.uid < 0)
        {
            throw new Error("Forbidden value (" + this.uid + ") on element of ExchangeBidHouseBuyMessage.uid.");
        }
    }

    private _qtyFunc(input: ICustomDataInput)
    {
        this.qty = input.readVarUhInt();
        if(this.qty < 0)
        {
            throw new Error("Forbidden value (" + this.qty + ") on element of ExchangeBidHouseBuyMessage.qty.");
        }
    }

    private _priceFunc(input: ICustomDataInput)
    {
        this.price = input.readVarUhLong();
        if(this.price < 0 || this.price > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.price + ") on element of ExchangeBidHouseBuyMessage.price.");
        }
    }

}