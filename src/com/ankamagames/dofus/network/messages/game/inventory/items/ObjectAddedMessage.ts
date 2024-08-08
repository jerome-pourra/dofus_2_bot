import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObjectAddedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6866;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public object: ObjectItem;
	public origin: number = 0;

    public constructor()
    {
        super();
        this.object = new ObjectItem();
    }

    public getMessageId()
    {
        return ObjectAddedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectAddedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectAddedMessage.endpointServer;
    }

    public initObjectAddedMessage(object: ObjectItem = null, origin: number = 0): ObjectAddedMessage
    {
        this.object = object;
        this.origin = origin;
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
        this.serializeAs_ObjectAddedMessage(output);
    }

    public serializeAs_ObjectAddedMessage(output: ICustomDataOutput)
    {
        this.object.serializeAs_ObjectItem(output);
        output.writeByte(this.origin);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectAddedMessage(input);
    }

    private deserializeAs_ObjectAddedMessage(input: ICustomDataInput)
    {
        this.object = new ObjectItem();
        this.object.deserialize(input);
        this._originFunc(input);
    }

    private _originFunc(input: ICustomDataInput)
    {
        this.origin = input.readByte();
        if(this.origin < 0)
        {
            throw new Error("Forbidden value (" + this.origin + ") on element of ObjectAddedMessage.origin.");
        }
    }

}