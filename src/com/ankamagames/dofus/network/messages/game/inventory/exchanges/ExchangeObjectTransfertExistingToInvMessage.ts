import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeObjectTransfertExistingToInvMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3544;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeObjectTransfertExistingToInvMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeObjectTransfertExistingToInvMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeObjectTransfertExistingToInvMessage.endpointServer;
    }

    public initExchangeObjectTransfertExistingToInvMessage(): ExchangeObjectTransfertExistingToInvMessage
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
        this.serializeAs_ExchangeObjectTransfertExistingToInvMessage(output);
    }

    public serializeAs_ExchangeObjectTransfertExistingToInvMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeObjectTransfertExistingToInvMessage(input);
    }

    private deserializeAs_ExchangeObjectTransfertExistingToInvMessage(input: ICustomDataInput)
    {

    }

}