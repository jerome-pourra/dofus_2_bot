import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObjectQuantityMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 204;

	public objectUID: number = 0;
	public quantity: number = 0;
	public origin: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ObjectQuantityMessage.protocolId;
    }

    public initObjectQuantityMessage(objectUID: number = 0, quantity: number = 0, origin: number = 0): ObjectQuantityMessage
    {
        this.objectUID = objectUID;
        this.quantity = quantity;
        this.origin = origin;
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
        this.serializeAs_ObjectQuantityMessage(output);
    }

    public serializeAs_ObjectQuantityMessage(output: ICustomDataOutput)
    {
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
        }
        output.writeVarInt(this.objectUID);
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
        }
        output.writeVarInt(this.quantity);
        output.writeByte(this.origin);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectQuantityMessage(input);
    }

    private deserializeAs_ObjectQuantityMessage(input: ICustomDataInput)
    {
        this._objectUIDFunc(input);
        this._quantityFunc(input);
        this._originFunc(input);
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectQuantityMessage.objectUID.");
        }
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarUhInt();
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectQuantityMessage.quantity.");
        }
    }

    private _originFunc(input: ICustomDataInput)
    {
        this.origin = input.readByte();
        if(this.origin < 0)
        {
            throw new Error("Forbidden value (" + this.origin + ") on element of ObjectQuantityMessage.origin.");
        }
    }

}