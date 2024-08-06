import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObjectMovementMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4510;

	public objectUID: number = 0;
	public position: number = 63;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ObjectMovementMessage.protocolId;
    }

    public initObjectMovementMessage(objectUID: number = 0, position: number = 63): ObjectMovementMessage
    {
        this.objectUID = objectUID;
        this.position = position;
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
        this.serializeAs_ObjectMovementMessage(output);
    }

    public serializeAs_ObjectMovementMessage(output: ICustomDataOutput)
    {
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
        }
        output.writeVarInt(this.objectUID);
        output.writeShort(this.position);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectMovementMessage(input);
    }

    private deserializeAs_ObjectMovementMessage(input: ICustomDataInput)
    {
        this._objectUIDFunc(input);
        this._positionFunc(input);
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectMovementMessage.objectUID.");
        }
    }

    private _positionFunc(input: ICustomDataInput)
    {
        this.position = input.readShort();
        if(this.position < 0)
        {
            throw new Error("Forbidden value (" + this.position + ") on element of ObjectMovementMessage.position.");
        }
    }

}