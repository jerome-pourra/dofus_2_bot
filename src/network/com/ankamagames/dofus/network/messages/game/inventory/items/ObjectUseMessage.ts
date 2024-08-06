import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObjectUseMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1372;

	public objectUID: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ObjectUseMessage.protocolId;
    }

    public initObjectUseMessage(objectUID: number = 0): ObjectUseMessage
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
        this.serializeAs_ObjectUseMessage(output);
    }

    public serializeAs_ObjectUseMessage(output: ICustomDataOutput)
    {
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
        }
        output.writeVarInt(this.objectUID);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectUseMessage(input);
    }

    private deserializeAs_ObjectUseMessage(input: ICustomDataInput)
    {
        this._objectUIDFunc(input);
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectUseMessage.objectUID.");
        }
    }

}