import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class StorageObjectsUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5323;

	public objectList: Array<ObjectItem>;

    public constructor()
    {
        super();
        this.objectList = Array<ObjectItem>();
    }

    public getMessageId()
    {
        return StorageObjectsUpdateMessage.protocolId;
    }

    public initStorageObjectsUpdateMessage(objectList: Array<ObjectItem> = null): StorageObjectsUpdateMessage
    {
        this.objectList = objectList;
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
        this.serializeAs_StorageObjectsUpdateMessage(output);
    }

    public serializeAs_StorageObjectsUpdateMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.objectList.length);
        for(var _i1: number = 0; _i1 < this.objectList.length; _i1++)
        {
            (this.objectList[_i1] as ObjectItem).serializeAs_ObjectItem(output);
        }
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