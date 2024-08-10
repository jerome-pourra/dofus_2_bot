import { InventoryContentMessage } from "./../items/InventoryContentMessage";
import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class StorageInventoryContentMessage extends InventoryContentMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6526;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return StorageInventoryContentMessage.protocolId;
    }

    public isEndpointClient()
    {
        return StorageInventoryContentMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return StorageInventoryContentMessage.endpointServer;
    }

    public initStorageInventoryContentMessage(objects: Array<ObjectItem> = null, kamas: number = 0): StorageInventoryContentMessage
    {
        super.initInventoryContentMessage(objects,kamas);
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
        this.serializeAs_StorageInventoryContentMessage(output);
    }

    public serializeAs_StorageInventoryContentMessage(output: ICustomDataOutput)
    {
        super.serializeAs_InventoryContentMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StorageInventoryContentMessage(input);
    }

    private deserializeAs_StorageInventoryContentMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}