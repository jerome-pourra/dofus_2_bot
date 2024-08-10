import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class StorageObjectRemoveMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8450;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public objectUID: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return StorageObjectRemoveMessage.protocolId;
    }

    public isEndpointClient()
    {
        return StorageObjectRemoveMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return StorageObjectRemoveMessage.endpointServer;
    }

    public initStorageObjectRemoveMessage(objectUID: number = 0): StorageObjectRemoveMessage
    {
        this.objectUID = objectUID;
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
        this.serializeAs_StorageObjectRemoveMessage(output);
    }

    public serializeAs_StorageObjectRemoveMessage(output: ICustomDataOutput)
    {
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
        }
        output.writeVarInt(this.objectUID);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StorageObjectRemoveMessage(input);
    }

    private deserializeAs_StorageObjectRemoveMessage(input: ICustomDataInput)
    {
        this._objectUIDFunc(input);
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of StorageObjectRemoveMessage.objectUID.");
        }
    }

}