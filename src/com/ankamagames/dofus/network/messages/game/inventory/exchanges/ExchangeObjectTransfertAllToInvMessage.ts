import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeObjectTransfertAllToInvMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4357;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeObjectTransfertAllToInvMessage.protocolId;
    }

    public initExchangeObjectTransfertAllToInvMessage(): ExchangeObjectTransfertAllToInvMessage
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
        this.serializeAs_ExchangeObjectTransfertAllToInvMessage(output);
    }

    public serializeAs_ExchangeObjectTransfertAllToInvMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeObjectTransfertAllToInvMessage(input);
    }

    private deserializeAs_ExchangeObjectTransfertAllToInvMessage(input: ICustomDataInput)
    {

    }

}