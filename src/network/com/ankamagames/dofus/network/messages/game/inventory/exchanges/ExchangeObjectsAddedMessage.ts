import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeObjectMessage } from "./ExchangeObjectMessage";

export class ExchangeObjectsAddedMessage extends ExchangeObjectMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9703;

	public object: Array<ObjectItem>;

    public constructor()
    {
        super();
        this.object = Array<ObjectItem>();
    }

    public getMessageId()
    {
        return ExchangeObjectsAddedMessage.protocolId;
    }

    public initExchangeObjectsAddedMessage(remote: boolean = false, object: Array<ObjectItem> = null): ExchangeObjectsAddedMessage
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
        this.serializeAs_ExchangeObjectsAddedMessage(output);
    }

    public serializeAs_ExchangeObjectsAddedMessage(output: ICustomDataOutput)
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
        this.deserializeAs_ExchangeObjectsAddedMessage(input);
    }

    private deserializeAs_ExchangeObjectsAddedMessage(input: ICustomDataInput)
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