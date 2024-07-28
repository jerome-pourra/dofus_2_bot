import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHouseItemRemoveOkMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8101;

	public sellerId: number = 0;

    public constructor()
    {
        super();
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