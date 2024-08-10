import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeSellOkMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 49;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeSellOkMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeSellOkMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeSellOkMessage.endpointServer;
    }

    public initExchangeSellOkMessage(): ExchangeSellOkMessage
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
        this.serializeAs_ExchangeSellOkMessage(output);
    }

    public serializeAs_ExchangeSellOkMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeSellOkMessage(input);
    }

    private deserializeAs_ExchangeSellOkMessage(input: ICustomDataInput)
    {

    }

}