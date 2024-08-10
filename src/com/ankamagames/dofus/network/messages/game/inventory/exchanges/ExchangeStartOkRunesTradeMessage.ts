import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartOkRunesTradeMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1662;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeStartOkRunesTradeMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeStartOkRunesTradeMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeStartOkRunesTradeMessage.endpointServer;
    }

    public initExchangeStartOkRunesTradeMessage(): ExchangeStartOkRunesTradeMessage
    {
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
        this.serializeAs_ExchangeStartOkRunesTradeMessage(output);
    }

    public serializeAs_ExchangeStartOkRunesTradeMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeStartOkRunesTradeMessage(input);
    }

    private deserializeAs_ExchangeStartOkRunesTradeMessage(input: ICustomDataInput)
    {

    }

}