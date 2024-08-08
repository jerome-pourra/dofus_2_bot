import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartOkEvolutiveObjectRecycleTradeMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9395;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeStartOkEvolutiveObjectRecycleTradeMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeStartOkEvolutiveObjectRecycleTradeMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeStartOkEvolutiveObjectRecycleTradeMessage.endpointServer;
    }

    public initExchangeStartOkEvolutiveObjectRecycleTradeMessage(): ExchangeStartOkEvolutiveObjectRecycleTradeMessage
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
        this.serializeAs_ExchangeStartOkEvolutiveObjectRecycleTradeMessage(output);
    }

    public serializeAs_ExchangeStartOkEvolutiveObjectRecycleTradeMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeStartOkEvolutiveObjectRecycleTradeMessage(input);
    }

    private deserializeAs_ExchangeStartOkEvolutiveObjectRecycleTradeMessage(input: ICustomDataInput)
    {

    }

}