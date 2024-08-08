import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeItemAutoCraftStopedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5298;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public reason: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeItemAutoCraftStopedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeItemAutoCraftStopedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeItemAutoCraftStopedMessage.endpointServer;
    }

    public initExchangeItemAutoCraftStopedMessage(reason: number = 0): ExchangeItemAutoCraftStopedMessage
    {
        this.reason = reason;
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
        this.serializeAs_ExchangeItemAutoCraftStopedMessage(output);
    }

    public serializeAs_ExchangeItemAutoCraftStopedMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.reason);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeItemAutoCraftStopedMessage(input);
    }

    private deserializeAs_ExchangeItemAutoCraftStopedMessage(input: ICustomDataInput)
    {
        this._reasonFunc(input);
    }

    private _reasonFunc(input: ICustomDataInput)
    {
        this.reason = input.readByte();
    }

}