import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class StorageObjectsRemoveMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1673;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public objectUIDList: Array<number>;

    public constructor()
    {
        super();
        this.objectUIDList = Array<number>();
    }

    public getMessageId()
    {
        return StorageObjectsRemoveMessage.protocolId;
    }

    public isEndpointClient()
    {
        return StorageObjectsRemoveMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return StorageObjectsRemoveMessage.endpointServer;
    }

    public initStorageObjectsRemoveMessage(objectUIDList: Array<number> = null): StorageObjectsRemoveMessage
    {
        this.objectUIDList = objectUIDList;
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
        this.serializeAs_StorageObjectsRemoveMessage(output);
    }

    public serializeAs_StorageObjectsRemoveMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.objectUIDList.length);
        for(var _i1: number = 0; _i1 < this.objectUIDList.length; _i1++)
        {
            if(this.objectUIDList[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.objectUIDList[_i1] + ") on element 1 (starting at 1) of objectUIDList.");
            }
            output.writeVarInt(this.objectUIDList[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StorageObjectsRemoveMessage(input);
    }

    private deserializeAs_StorageObjectsRemoveMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _objectUIDListLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _objectUIDListLen; _i1++)
        {
            _val1 = input.readVarUhInt();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of objectUIDList.");
            }
            this.objectUIDList.push(_val1);
        }
    }

}