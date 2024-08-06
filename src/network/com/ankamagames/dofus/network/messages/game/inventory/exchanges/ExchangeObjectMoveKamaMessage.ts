import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeObjectMoveKamaMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7773;

	public quantity: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeObjectMoveKamaMessage.protocolId;
    }

    public initExchangeObjectMoveKamaMessage(quantity: number = 0): ExchangeObjectMoveKamaMessage
    {
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
        this.serializeAs_ExchangeObjectMoveKamaMessage(output);
    }

    public serializeAs_ExchangeObjectMoveKamaMessage(output: ICustomDataOutput)
    {
        if(this.quantity < -9007199254740992 || this.quantity > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
        }
        output.writeVarLong(this.quantity);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeObjectMoveKamaMessage(input);
    }

    private deserializeAs_ExchangeObjectMoveKamaMessage(input: ICustomDataInput)
    {
        this._quantityFunc(input);
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarLong();
        if(this.quantity < -9007199254740992 || this.quantity > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ExchangeObjectMoveKamaMessage.quantity.");
        }
    }

}