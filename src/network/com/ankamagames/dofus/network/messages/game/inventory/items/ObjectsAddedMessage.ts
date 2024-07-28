import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObjectsAddedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1527;

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
        this.deserializeAs_ObjectsAddedMessage(input);
    }

    private deserializeAs_ObjectsAddedMessage(input: ICustomDataInput)
    {
        let _item1: ObjectItem;
        let _objectLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _objectLen; _i1++)
        {
            _item1 = new ObjectItem();
            _item1.deserialize(input);
            this.object.push(_item1);
        }
    }

}