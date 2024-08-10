import { ObjectItemQuantity } from "./../../../types/game/data/items/ObjectItemQuantity";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ObjectFeedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8727;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public objectUID: number = 0;
	public meal: Array<ObjectItemQuantity>;

    public constructor()
    {
        super();
        this.meal = Array<ObjectItemQuantity>();
    }

    public getMessageId()
    {
        return ObjectFeedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectFeedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectFeedMessage.endpointServer;
    }

    public initObjectFeedMessage(objectUID: number = 0, meal: Array<ObjectItemQuantity> = null): ObjectFeedMessage
    {
        this.objectUID = objectUID;
        this.meal = meal;
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
        this.serializeAs_ObjectFeedMessage(output);
    }

    public serializeAs_ObjectFeedMessage(output: ICustomDataOutput)
    {
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
        }
        output.writeVarInt(this.objectUID);
        output.writeShort(this.meal.length);
        for(var _i2: number = 0; _i2 < this.meal.length; _i2++)
        {
            (this.meal[_i2] as ObjectItemQuantity).serializeAs_ObjectItemQuantity(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectFeedMessage(input);
    }

    private deserializeAs_ObjectFeedMessage(input: ICustomDataInput)
    {
        let _item2: ObjectItemQuantity;
        this._objectUIDFunc(input);
        let _mealLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _mealLen; _i2++)
        {
            _item2 = new ObjectItemQuantity();
            _item2.deserialize(input);
            this.meal.push(_item2);
        }
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectFeedMessage.objectUID.");
        }
    }

}