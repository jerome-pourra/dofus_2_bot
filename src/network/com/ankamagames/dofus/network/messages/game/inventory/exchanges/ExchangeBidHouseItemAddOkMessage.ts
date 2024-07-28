import { ObjectItemToSellInBid } from "./../../../../types/game/data/items/ObjectItemToSellInBid";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHouseItemAddOkMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1557;

	public itemInfo: ObjectItemToSellInBid;

    public constructor()
    {
        super();
        this.itemInfo = new ObjectItemToSellInBid();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeBidHouseItemAddOkMessage(input);
    }

    private deserializeAs_ExchangeBidHouseItemAddOkMessage(input: ICustomDataInput)
    {
        this.itemInfo = new ObjectItemToSellInBid();
        this.itemInfo.deserialize(input);
    }

}