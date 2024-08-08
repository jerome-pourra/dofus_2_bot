import { ObjectItem } from "./../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ChatClientMultiMessage } from "./ChatClientMultiMessage";

export class ChatClientMultiWithObjectMessage extends ChatClientMultiMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5473;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public objects: Array<ObjectItem>;

    public constructor()
    {
        super();
        this.objects = Array<ObjectItem>();
    }

    public getMessageId()
    {
        return ChatClientMultiWithObjectMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChatClientMultiWithObjectMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChatClientMultiWithObjectMessage.endpointServer;
    }

    public initChatClientMultiWithObjectMessage(content: string = "", channel: number = 0, objects: Array<ObjectItem> = null): ChatClientMultiWithObjectMessage
    {
        super.initChatClientMultiMessage(content,channel);
        this.objects = objects;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ChatClientMultiWithObjectMessage(output);
    }

    public serializeAs_ChatClientMultiWithObjectMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ChatClientMultiMessage(output);
        output.writeShort(this.objects.length);
        for(var _i1: number = 0; _i1 < this.objects.length; _i1++)
        {
            (this.objects[_i1] as ObjectItem).serializeAs_ObjectItem(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatClientMultiWithObjectMessage(input);
    }

    private deserializeAs_ChatClientMultiWithObjectMessage(input: ICustomDataInput)
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