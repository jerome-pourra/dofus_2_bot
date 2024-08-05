import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class StorageObjectsUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5323;

	public objectList: Array<ObjectItem>;

    public constructor()
    {
        super();
        this.objectList = Array<ObjectItem>();
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
        this.deserializeAs_StorageObjectsUpdateMessage(input);
    }

    private deserializeAs_StorageObjectsUpdateMessage(input: ICustomDataInput)
    {
        let _item1: ObjectItem;
        let _objectListLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _objectListLen; _i1++)
        {
            _item1 = new ObjectItem();
            _item1.deserialize(input);
            this.objectList.push(_item1);
        }
    }

}