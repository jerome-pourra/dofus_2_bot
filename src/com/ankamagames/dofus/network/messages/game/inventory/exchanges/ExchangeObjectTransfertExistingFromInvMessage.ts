import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeObjectTransfertExistingFromInvMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9675;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeObjectTransfertExistingFromInvMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeObjectTransfertExistingFromInvMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeObjectTransfertExistingFromInvMessage.endpointServer;
    }

    public initExchangeObjectTransfertExistingFromInvMessage(): ExchangeObjectTransfertExistingFromInvMessage
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
        this.serializeAs_ExchangeObjectTransfertExistingFromInvMessage(output);
    }

    public serializeAs_ExchangeObjectTransfertExistingFromInvMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeObjectTransfertExistingFromInvMessage(input);
    }

    private deserializeAs_ExchangeObjectTransfertExistingFromInvMessage(input: ICustomDataInput)
    {

    }

}