import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ObjectGroundAddedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3774;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public cellId: number = 0;
	public objectGID: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ObjectGroundAddedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectGroundAddedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectGroundAddedMessage.endpointServer;
    }

    public initObjectGroundAddedMessage(cellId: number = 0, objectGID: number = 0): ObjectGroundAddedMessage
    {
        this.cellId = cellId;
        this.objectGID = objectGID;
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
        this.serializeAs_ObjectGroundAddedMessage(output);
    }

    public serializeAs_ObjectGroundAddedMessage(output: ICustomDataOutput)
    {
        if(this.cellId < 0 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
        }
        output.writeVarShort(this.cellId);
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
        }
        output.writeVarInt(this.objectGID);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectGroundAddedMessage(input);
    }

    private deserializeAs_ObjectGroundAddedMessage(input: ICustomDataInput)
    {
        this._cellIdFunc(input);
        this._objectGIDFunc(input);
    }

    private _cellIdFunc(input: ICustomDataInput)
    {
        this.cellId = input.readVarUhShort();
        if(this.cellId < 0 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element of ObjectGroundAddedMessage.cellId.");
        }
    }

    private _objectGIDFunc(input: ICustomDataInput)
    {
        this.objectGID = input.readVarUhInt();
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of ObjectGroundAddedMessage.objectGID.");
        }
    }

}