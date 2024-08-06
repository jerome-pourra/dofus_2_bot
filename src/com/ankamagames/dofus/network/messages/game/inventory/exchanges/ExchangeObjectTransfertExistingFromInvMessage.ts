import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeObjectTransfertExistingFromInvMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9675;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeObjectTransfertExistingFromInvMessage.protocolId;
    }

    public initExchangeObjectTransfertExistingFromInvMessage(): ExchangeObjectTransfertExistingFromInvMessage
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