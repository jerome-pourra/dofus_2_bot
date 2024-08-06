import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3043;

	public exchangeType: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeStartedMessage.protocolId;
    }

    public initExchangeStartedMessage(exchangeType: number = 0): ExchangeStartedMessage
    {
        this.exchangeType = exchangeType;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangeStartedMessage(output);
    }

    public serializeAs_ExchangeStartedMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.exchangeType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeStartedMessage(input);
    }

    private deserializeAs_ExchangeStartedMessage(input: ICustomDataInput)
    {
        this._exchangeTypeFunc(input);
    }

    private _exchangeTypeFunc(input: ICustomDataInput)
    {
        this.exchangeType = input.readByte();
    }

}