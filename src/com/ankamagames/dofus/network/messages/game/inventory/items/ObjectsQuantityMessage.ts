import { ObjectItemQuantity } from "./../../../../types/game/data/items/ObjectItemQuantity";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObjectsQuantityMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5664;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public objectsUIDAndQty: Array<ObjectItemQuantity>;

    public constructor()
    {
        super();
        this.objectsUIDAndQty = Array<ObjectItemQuantity>();
    }

    public getMessageId()
    {
        return ObjectsQuantityMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectsQuantityMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectsQuantityMessage.endpointServer;
    }

    public initObjectsQuantityMessage(objectsUIDAndQty: Array<ObjectItemQuantity> = null): ObjectsQuantityMessage
    {
        this.objectsUIDAndQty = objectsUIDAndQty;
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
        this.serializeAs_ObjectsQuantityMessage(output);
    }

    public serializeAs_ObjectsQuantityMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.objectsUIDAndQty.length);
        for(var _i1: number = 0; _i1 < this.objectsUIDAndQty.length; _i1++)
        {
            (this.objectsUIDAndQty[_i1] as ObjectItemQuantity).serializeAs_ObjectItemQuantity(output);
        }
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