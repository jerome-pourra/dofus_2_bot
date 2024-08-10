import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeRequestOnMountStockMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5627;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeRequestOnMountStockMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeRequestOnMountStockMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeRequestOnMountStockMessage.endpointServer;
    }

    public initExchangeRequestOnMountStockMessage(): ExchangeRequestOnMountStockMessage
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
        this.serializeAs_ExchangeRequestOnMountStockMessage(output);
    }

    public serializeAs_ExchangeRequestOnMountStockMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeRequestOnMountStockMessage(input);
    }

    private deserializeAs_ExchangeRequestOnMountStockMessage(input: ICustomDataInput)
    {

    }

}