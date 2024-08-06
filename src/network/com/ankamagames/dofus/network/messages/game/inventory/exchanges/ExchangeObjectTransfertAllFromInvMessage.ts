import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeObjectTransfertAllFromInvMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1681;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeObjectTransfertAllFromInvMessage.protocolId;
    }

    public initExchangeObjectTransfertAllFromInvMessage(): ExchangeObjectTransfertAllFromInvMessage
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
        this.serializeAs_ExchangeObjectTransfertAllFromInvMessage(output);
    }

    public serializeAs_ExchangeObjectTransfertAllFromInvMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeObjectTransfertAllFromInvMessage(input);
    }

    private deserializeAs_ExchangeObjectTransfertAllFromInvMessage(input: ICustomDataInput)
    {

    }

}