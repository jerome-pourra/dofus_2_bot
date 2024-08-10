import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObjectSetPositionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5569;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public objectUID: number = 0;
	public position: number = 63;
	public quantity: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ObjectSetPositionMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectSetPositionMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectSetPositionMessage.endpointServer;
    }

    public initObjectSetPositionMessage(objectUID: number = 0, position: number = 63, quantity: number = 0): ObjectSetPositionMessage
    {
        this.objectUID = objectUID;
        this.position = position;
        this.quantity = quantity;
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
        this.serializeAs_ObjectSetPositionMessage(output);
    }

    public serializeAs_ObjectSetPositionMessage(output: ICustomDataOutput)
    {
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
        }
        output.writeVarInt(this.objectUID);
        output.writeShort(this.position);
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
        }
        output.writeVarInt(this.quantity);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectSetPositionMessage(input);
    }

    private deserializeAs_ObjectSetPositionMessage(input: ICustomDataInput)
    {
        this._objectUIDFunc(input);
        this._positionFunc(input);
        this._quantityFunc(input);
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectSetPositionMessage.objectUID.");
        }
    }

    private _positionFunc(input: ICustomDataInput)
    {
        this.position = input.readShort();
        if(this.position < 0)
        {
            throw new Error("Forbidden value (" + this.position + ") on element of ObjectSetPositionMessage.position.");
        }
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarUhInt();
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectSetPositionMessage.quantity.");
        }
    }

}