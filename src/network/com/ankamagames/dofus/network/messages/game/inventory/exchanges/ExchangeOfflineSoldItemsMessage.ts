import { ObjectItemQuantityPriceDateEffects } from "./../../../../types/game/data/items/ObjectItemQuantityPriceDateEffects";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeOfflineSoldItemsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2524;

	public bidHouseItems: Array<ObjectItemQuantityPriceDateEffects>;

    public constructor()
    {
        super();
        this.bidHouseItems = Array<ObjectItemQuantityPriceDateEffects>();
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
        this.deserializeAs_ExchangeOfflineSoldItemsMessage(input);
    }

    private deserializeAs_ExchangeOfflineSoldItemsMessage(input: ICustomDataInput)
    {
        let _item1: ObjectItemQuantityPriceDateEffects;
        let _bidHouseItemsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _bidHouseItemsLen; _i1++)
        {
            _item1 = new ObjectItemQuantityPriceDateEffects();
            _item1.deserialize(input);
            this.bidHouseItems.push(_item1);
        }
    }

}