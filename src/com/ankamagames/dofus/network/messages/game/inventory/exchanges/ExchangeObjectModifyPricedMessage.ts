import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeObjectMovePricedMessage } from "./ExchangeObjectMovePricedMessage";

export class ExchangeObjectModifyPricedMessage extends ExchangeObjectMovePricedMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1058;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeObjectModifyPricedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeObjectModifyPricedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeObjectModifyPricedMessage.endpointServer;
    }

    public initExchangeObjectModifyPricedMessage(objectUID: number = 0, quantity: number = 0, price: number = 0): ExchangeObjectModifyPricedMessage
    {
        super.initExchangeObjectMovePricedMessage(objectUID,quantity,price);
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
        this.serializeAs_ExchangeObjectModifyPricedMessage(output);
    }

    public serializeAs_ExchangeObjectModifyPricedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeObjectMovePricedMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeObjectModifyPricedMessage(input);
    }

    private deserializeAs_ExchangeObjectModifyPricedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}