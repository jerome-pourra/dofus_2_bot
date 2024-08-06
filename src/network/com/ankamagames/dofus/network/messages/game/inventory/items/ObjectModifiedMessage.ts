import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObjectModifiedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7821;

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

    public initObjectModifiedMessage(object: ObjectItem = null): ObjectModifiedMessage
    {
        this.object = object;
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