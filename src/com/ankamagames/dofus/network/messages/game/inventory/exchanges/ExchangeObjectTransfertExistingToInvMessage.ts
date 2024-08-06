import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeObjectTransfertExistingToInvMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3544;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeObjectTransfertExistingToInvMessage.protocolId;
    }

    public initExchangeObjectTransfertExistingToInvMessage(): ExchangeObjectTransfertExistingToInvMessage
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