import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObjectModifiedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7821;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public object: ObjectItem;

    public constructor()
    {
        super();
        this.object = new ObjectItem();
    }

    public getMessageId()
    {
        return ObjectModifiedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectModifiedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectModifiedMessage.endpointServer;
    }

    public initObjectModifiedMessage(object: ObjectItem = null): ObjectModifiedMessage
    {
        this.object = object;
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
        this.serializeAs_ObjectModifiedMessage(output);
    }

    public serializeAs_ObjectModifiedMessage(output: ICustomDataOutput)
    {
        this.object.serializeAs_ObjectItem(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectModifiedMessage(input);
    }

    private deserializeAs_ObjectModifiedMessage(input: ICustomDataInput)
    {
        this.object = new ObjectItem();
        this.object.deserialize(input);
    }

}