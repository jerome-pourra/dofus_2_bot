import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHouseItemRemoveOkMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8101;

	public sellerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeBidHouseItemRemoveOkMessage.protocolId;
    }

    public initExchangeBidHouseItemRemoveOkMessage(sellerId: number = 0): ExchangeBidHouseItemRemoveOkMessage
    {
        this.sellerId = sellerId;
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
        this.serializeAs_ExchangeBidHouseItemRemoveOkMessage(output);
    }

    public serializeAs_ExchangeBidHouseItemRemoveOkMessage(output: ICustomDataOutput)
    {
        output.writeInt(this.sellerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeBidHouseItemRemoveOkMessage(input);
    }

    private deserializeAs_ExchangeBidHouseItemRemoveOkMessage(input: ICustomDataInput)
    {
        this._sellerIdFunc(input);
    }

    private _sellerIdFunc(input: ICustomDataInput)
    {
        this.sellerId = input.readInt();
    }

}