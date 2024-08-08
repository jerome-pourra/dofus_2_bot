import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeRequestedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1313;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public exchangeType: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeRequestedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeRequestedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeRequestedMessage.endpointServer;
    }

    public initExchangeRequestedMessage(exchangeType: number = 0): ExchangeRequestedMessage
    {
        this.exchangeType = exchangeType;
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
        this.serializeAs_ExchangeRequestedMessage(output);
    }

    public serializeAs_ExchangeRequestedMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.exchangeType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeRequestedMessage(input);
    }

    private deserializeAs_ExchangeRequestedMessage(input: ICustomDataInput)
    {
        this._exchangeTypeFunc(input);
    }

    private _exchangeTypeFunc(input: ICustomDataInput)
    {
        this.exchangeType = input.readByte();
    }

}