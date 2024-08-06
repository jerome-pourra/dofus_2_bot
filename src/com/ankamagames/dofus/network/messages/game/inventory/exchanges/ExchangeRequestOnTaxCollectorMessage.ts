import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeRequestOnTaxCollectorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1216;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeRequestOnTaxCollectorMessage.protocolId;
    }

    public initExchangeRequestOnTaxCollectorMessage(): ExchangeRequestOnTaxCollectorMessage
    {
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
        this.serializeAs_ExchangeRequestOnTaxCollectorMessage(output);
    }

    public serializeAs_ExchangeRequestOnTaxCollectorMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeRequestOnTaxCollectorMessage(input);
    }

    private deserializeAs_ExchangeRequestOnTaxCollectorMessage(input: ICustomDataInput)
    {

    }

}