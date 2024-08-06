import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObjectDeletedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6668;

	public objectUID: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ObjectDeletedMessage.protocolId;
    }

    public initObjectDeletedMessage(objectUID: number = 0): ObjectDeletedMessage
    {
        this.objectUID = objectUID;
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
        this.serializeAs_ObjectDeletedMessage(output);
    }

    public serializeAs_ObjectDeletedMessage(output: ICustomDataOutput)
    {
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
        }
        output.writeVarInt(this.objectUID);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectDeletedMessage(input);
    }

    private deserializeAs_ObjectDeletedMessage(input: ICustomDataInput)
    {
        this._objectUIDFunc(input);
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectDeletedMessage.objectUID.");
        }
    }

}