import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class PaddockSellBuyDialogMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4196;

	public bsell: boolean = false;
	public ownerId: number = 0;
	public price: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PaddockSellBuyDialogMessage.protocolId;
    }

    public initPaddockSellBuyDialogMessage(bsell: boolean = false, ownerId: number = 0, price: number = 0): PaddockSellBuyDialogMessage
    {
        this.bsell = bsell;
        this.ownerId = ownerId;
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
        this.serializeAs_PaddockSellBuyDialogMessage(output);
    }

    public serializeAs_PaddockSellBuyDialogMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.bsell);
        if(this.ownerId < 0)
        {
            throw new Error("Forbidden value (" + this.ownerId + ") on element ownerId.");
        }
        output.writeVarInt(this.ownerId);
        if(this.price < 0 || this.price > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.price + ") on element price.");
        }
        output.writeVarLong(this.price);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaddockSellBuyDialogMessage(input);
    }

    private deserializeAs_PaddockSellBuyDialogMessage(input: ICustomDataInput)
    {
        this._bsellFunc(input);
        this._ownerIdFunc(input);
        this._priceFunc(input);
    }

    private _bsellFunc(input: ICustomDataInput)
    {
        this.bsell = input.readBoolean();
    }

    private _ownerIdFunc(input: ICustomDataInput)
    {
        this.ownerId = input.readVarUhInt();
        if(this.ownerId < 0)
        {
            throw new Error("Forbidden value (" + this.ownerId + ") on element of PaddockSellBuyDialogMessage.ownerId.");
        }
    }

    private _priceFunc(input: ICustomDataInput)
    {
        this.price = input.readVarUhLong();
        if(this.price < 0 || this.price > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.price + ") on element of PaddockSellBuyDialogMessage.price.");
        }
    }

}