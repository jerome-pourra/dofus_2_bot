import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class InventoryContentMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8042;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public objects: Array<ObjectItem>;
	public kamas: number = 0;

    public constructor()
    {
        super();
        this.objects = Array<ObjectItem>();
    }

    public getMessageId()
    {
        return InventoryContentMessage.protocolId;
    }

    public isEndpointClient()
    {
        return InventoryContentMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return InventoryContentMessage.endpointServer;
    }

    public initInventoryContentMessage(objects: Array<ObjectItem> = null, kamas: number = 0): InventoryContentMessage
    {
        this.objects = objects;
        this.kamas = kamas;
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
        this.serializeAs_InventoryContentMessage(output);
    }

    public serializeAs_InventoryContentMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.objects.length);
        for(var _i1: number = 0; _i1 < this.objects.length; _i1++)
        {
            (this.objects[_i1] as ObjectItem).serializeAs_ObjectItem(output);
        }
        if(this.kamas < 0 || this.kamas > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kamas + ") on element kamas.");
        }
        output.writeVarLong(this.kamas);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_InventoryContentMessage(input);
    }

    private deserializeAs_InventoryContentMessage(input: ICustomDataInput)
    {
        let _item1: ObjectItem;
        let _objectsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _objectsLen; _i1++)
        {
            _item1 = new ObjectItem();
            _item1.deserialize(input);
            this.objects.push(_item1);
        }
        this._kamasFunc(input);
    }

    private _kamasFunc(input: ICustomDataInput)
    {
        this.kamas = input.readVarUhLong();
        if(this.kamas < 0 || this.kamas > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kamas + ") on element of InventoryContentMessage.kamas.");
        }
    }

}