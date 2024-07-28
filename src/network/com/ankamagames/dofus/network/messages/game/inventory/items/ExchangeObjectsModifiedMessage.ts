import { ExchangeObjectMessage } from "./../exchanges/ExchangeObjectMessage";
import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class ExchangeObjectsModifiedMessage extends ExchangeObjectMessage
{

	public static readonly protocolId: number = 7326;

	public object: Array<ObjectItem>;

    public constructor()
    {
        super();
        this.object = Array<ObjectItem>();
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
        this.deserializeAs_ExchangeObjectsModifiedMessage(input);
    }

    private deserializeAs_ExchangeObjectsModifiedMessage(input: ICustomDataInput)
    {
        let _item1: ObjectItem;
        super.deserialize(input);
        let _objectLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _objectLen; _i1++)
        {
            _item1 = new ObjectItem();
            _item1.deserialize(input);
            this.object.push(_item1);
        }
    }

}