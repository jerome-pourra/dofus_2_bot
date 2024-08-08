import { ObjectItem } from "./../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ChatServerMessage } from "./ChatServerMessage";

export class ChatServerWithObjectMessage extends ChatServerMessage implements INetworkMessage
{

	public static readonly protocolId: number = 399;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public objects: Array<ObjectItem>;

    public constructor()
    {
        super();
        this.objects = Array<ObjectItem>();
    }

    public getMessageId()
    {
        return ChatServerWithObjectMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChatServerWithObjectMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChatServerWithObjectMessage.endpointServer;
    }

    public initChatServerWithObjectMessage(channel: number = 0, content: string = "", timestamp: number = 0, fingerprint: string = "", senderId: number = 0, senderName: string = "", prefix: string = "", senderAccountId: number = 0, objects: Array<ObjectItem> = null): ChatServerWithObjectMessage
    {
        super.initChatServerMessage(channel,content,timestamp,fingerprint,senderId,senderName,prefix,senderAccountId);
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
        this.serializeAs_ChatServerWithObjectMessage(output);
    }

    public serializeAs_ChatServerWithObjectMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ChatServerMessage(output);
        output.writeShort(this.objects.length);
        for(var _i1: number = 0; _i1 < this.objects.length; _i1++)
        {
            (this.objects[_i1] as ObjectItem).serializeAs_ObjectItem(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatServerWithObjectMessage(input);
    }

    private deserializeAs_ChatServerWithObjectMessage(input: ICustomDataInput)
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