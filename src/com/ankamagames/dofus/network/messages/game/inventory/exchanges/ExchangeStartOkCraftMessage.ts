import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartOkCraftMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6203;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeStartOkCraftMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeStartOkCraftMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeStartOkCraftMessage.endpointServer;
    }

    public initExchangeStartOkCraftMessage(): ExchangeStartOkCraftMessage
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
        this.serializeAs_ExchangeStartOkCraftMessage(output);
    }

    public serializeAs_ExchangeStartOkCraftMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeStartOkCraftMessage(input);
    }

    private deserializeAs_ExchangeStartOkCraftMessage(input: ICustomDataInput)
    {

    }

}