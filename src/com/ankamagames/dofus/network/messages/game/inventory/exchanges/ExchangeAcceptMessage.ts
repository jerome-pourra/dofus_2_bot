import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeAcceptMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 804;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeAcceptMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeAcceptMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeAcceptMessage.endpointServer;
    }

    public initExchangeAcceptMessage(): ExchangeAcceptMessage
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
        this.serializeAs_ExchangeAcceptMessage(output);
    }

    public serializeAs_ExchangeAcceptMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeAcceptMessage(input);
    }

    private deserializeAs_ExchangeAcceptMessage(input: ICustomDataInput)
    {

    }

}