import { ObjectItemQuantity } from "./../../../../types/game/data/items/ObjectItemQuantity";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObjectsQuantityMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5664;

	public objectsUIDAndQty: Array<ObjectItemQuantity>;

    public constructor()
    {
        super();
        this.objectsUIDAndQty = Array<ObjectItemQuantity>();
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
        this.deserializeAs_ObjectsQuantityMessage(input);
    }

    private deserializeAs_ObjectsQuantityMessage(input: ICustomDataInput)
    {
        let _item1: ObjectItemQuantity;
        let _objectsUIDAndQtyLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _objectsUIDAndQtyLen; _i1++)
        {
            _item1 = new ObjectItemQuantity();
            _item1.deserialize(input);
            this.objectsUIDAndQty.push(_item1);
        }
    }

}