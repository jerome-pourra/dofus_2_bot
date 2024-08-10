import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeCraftPaymentModificationRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2392;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public quantity: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeCraftPaymentModificationRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeCraftPaymentModificationRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeCraftPaymentModificationRequestMessage.endpointServer;
    }

    public initExchangeCraftPaymentModificationRequestMessage(quantity: number = 0): ExchangeCraftPaymentModificationRequestMessage
    {
        this.quantity = quantity;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangeCraftPaymentModificationRequestMessage(output);
    }

    public serializeAs_ExchangeCraftPaymentModificationRequestMessage(output: ICustomDataOutput)
    {
        if(this.quantity < 0 || this.quantity > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
        }
        output.writeVarLong(this.quantity);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeCraftPaymentModificationRequestMessage(input);
    }

    private deserializeAs_ExchangeCraftPaymentModificationRequestMessage(input: ICustomDataInput)
    {
        this._quantityFunc(input);
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarUhLong();
        if(this.quantity < 0 || this.quantity > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ExchangeCraftPaymentModificationRequestMessage.quantity.");
        }
    }

}