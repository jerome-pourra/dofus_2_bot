import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBuyMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4582;

	public objectToBuyId: number = 0;
	public quantity: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeBuyMessage.protocolId;
    }

    public initExchangeBuyMessage(objectToBuyId: number = 0, quantity: number = 0): ExchangeBuyMessage
    {
        this.objectToBuyId = objectToBuyId;
        this.quantity = quantity;
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
        this.serializeAs_ExchangeBuyMessage(output);
    }

    public serializeAs_ExchangeBuyMessage(output: ICustomDataOutput)
    {
        if(this.objectToBuyId < 0)
        {
            throw new Error("Forbidden value (" + this.objectToBuyId + ") on element objectToBuyId.");
        }
        output.writeVarInt(this.objectToBuyId);
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
        }
        output.writeVarInt(this.quantity);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeBuyMessage(input);
    }

    private deserializeAs_ExchangeBuyMessage(input: ICustomDataInput)
    {
        this._objectToBuyIdFunc(input);
        this._quantityFunc(input);
    }

    private _objectToBuyIdFunc(input: ICustomDataInput)
    {
        this.objectToBuyId = input.readVarUhInt();
        if(this.objectToBuyId < 0)
        {
            throw new Error("Forbidden value (" + this.objectToBuyId + ") on element of ExchangeBuyMessage.objectToBuyId.");
        }
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarUhInt();
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ExchangeBuyMessage.quantity.");
        }
    }

}