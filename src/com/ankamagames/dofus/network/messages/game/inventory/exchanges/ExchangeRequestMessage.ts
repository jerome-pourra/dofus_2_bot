import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2919;

	public exchangeType: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeRequestMessage.protocolId;
    }

    public initExchangeRequestMessage(exchangeType: number = 0): ExchangeRequestMessage
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
        this.serializeAs_ExchangeRequestMessage(output);
    }

    public serializeAs_ExchangeRequestMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.exchangeType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeRequestMessage(input);
    }

    private deserializeAs_ExchangeRequestMessage(input: ICustomDataInput)
    {
        this._exchangeTypeFunc(input);
    }

    private _exchangeTypeFunc(input: ICustomDataInput)
    {
        this.exchangeType = input.readByte();
    }

}