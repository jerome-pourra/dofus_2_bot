import { AbstractPlayerSearchInformation } from "./../../../types/common/AbstractPlayerSearchInformation";
import { ObjectItem } from "./../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ChatClientPrivateMessage } from "./ChatClientPrivateMessage";

export class ChatClientPrivateWithObjectMessage extends ChatClientPrivateMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9502;

	public objects: Array<ObjectItem>;

    public constructor()
    {
        super();
        this.objects = Array<ObjectItem>();
    }

    public getMessageId()
    {
        return ChatClientPrivateWithObjectMessage.protocolId;
    }

    public initChatClientPrivateWithObjectMessage(content: string = "", receiver: AbstractPlayerSearchInformation = null, objects: Array<ObjectItem> = null): ChatClientPrivateWithObjectMessage
    {
        super.initChatClientPrivateMessage(content,receiver);
        this.objects = objects;
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
        this.serializeAs_ChatClientPrivateWithObjectMessage(output);
    }

    public serializeAs_ChatClientPrivateWithObjectMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ChatClientPrivateMessage(output);
        output.writeShort(this.objects.length);
        for(var _i1: number = 0; _i1 < this.objects.length; _i1++)
        {
            (this.objects[_i1] as ObjectItem).serializeAs_ObjectItem(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatClientPrivateWithObjectMessage(input);
    }

    private deserializeAs_ChatClientPrivateWithObjectMessage(input: ICustomDataInput)
    {
        let _item1: ObjectItem;
        super.deserialize(input);
        let _objectsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _objectsLen; _i1++)
        {
            _item1 = new ObjectItem();
            _item1.deserialize(input);
            this.objects.push(_item1);
        }
    }

}