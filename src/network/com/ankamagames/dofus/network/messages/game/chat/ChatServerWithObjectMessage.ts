import { ObjectItem } from "./../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ChatServerMessage } from "./ChatServerMessage";

export class ChatServerWithObjectMessage extends ChatServerMessage
{

	public static readonly protocolId: number = 399;

	public objects: Array<ObjectItem>;

    public constructor()
    {
        super();
        this.objects = Array<ObjectItem>();
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