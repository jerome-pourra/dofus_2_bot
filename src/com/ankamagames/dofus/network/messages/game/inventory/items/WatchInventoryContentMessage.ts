import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { InventoryContentMessage } from "./InventoryContentMessage";

export class WatchInventoryContentMessage extends InventoryContentMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8887;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return WatchInventoryContentMessage.protocolId;
    }

    public isEndpointClient()
    {
        return WatchInventoryContentMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return WatchInventoryContentMessage.endpointServer;
    }

    public initWatchInventoryContentMessage(objects: Array<ObjectItem> = null, kamas: number = 0): WatchInventoryContentMessage
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
        this.serializeAs_WatchInventoryContentMessage(output);
    }

    public serializeAs_WatchInventoryContentMessage(output: ICustomDataOutput)
    {
        super.serializeAs_InventoryContentMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_WatchInventoryContentMessage(input);
    }

    private deserializeAs_WatchInventoryContentMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}