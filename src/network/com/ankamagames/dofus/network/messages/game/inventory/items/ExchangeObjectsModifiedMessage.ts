import { ExchangeObjectMessage } from "./../exchanges/ExchangeObjectMessage";
import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class ExchangeObjectsModifiedMessage extends ExchangeObjectMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7326;

	public object: Array<ObjectItem>;

    public constructor()
    {
        super();
        this.object = Array<ObjectItem>();
    }

    public getMessageId()
    {
        return ExchangeObjectsModifiedMessage.protocolId;
    }

    public initExchangeObjectsModifiedMessage(remote: boolean = false, object: Array<ObjectItem> = null): ExchangeObjectsModifiedMessage
    {
        super.initExchangeObjectMessage(remote);
        this.object = object;
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
        this.serializeAs_ExchangeObjectsModifiedMessage(output);
    }

    public serializeAs_ExchangeObjectsModifiedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeObjectMessage(output);
        output.writeShort(this.object.length);
        for(var _i1: number = 0; _i1 < this.object.length; _i1++)
        {
            (this.object[_i1] as ObjectItem).serializeAs_ObjectItem(output);
        }
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