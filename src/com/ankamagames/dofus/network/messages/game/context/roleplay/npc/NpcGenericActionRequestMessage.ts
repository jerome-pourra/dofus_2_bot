import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class NpcGenericActionRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6670;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public npcId: number = 0;
	public npcActionId: number = 0;
	public npcMapId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return NpcGenericActionRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return NpcGenericActionRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return NpcGenericActionRequestMessage.endpointServer;
    }

    public initNpcGenericActionRequestMessage(npcId: number = 0, npcActionId: number = 0, npcMapId: number = 0): NpcGenericActionRequestMessage
    {
        this.npcId = npcId;
        this.npcActionId = npcActionId;
        this.npcMapId = npcMapId;
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
        this.serializeAs_NpcGenericActionRequestMessage(output);
    }

    public serializeAs_NpcGenericActionRequestMessage(output: ICustomDataOutput)
    {
        output.writeInt(this.npcId);
        if(this.npcActionId < 0)
        {
            throw new Error("Forbidden value (" + this.npcActionId + ") on element npcActionId.");
        }
        output.writeByte(this.npcActionId);
        if(this.npcMapId < 0 || this.npcMapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.npcMapId + ") on element npcMapId.");
        }
        output.writeDouble(this.npcMapId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NpcGenericActionRequestMessage(input);
    }

    private deserializeAs_NpcGenericActionRequestMessage(input: ICustomDataInput)
    {
        this._npcIdFunc(input);
        this._npcActionIdFunc(input);
        this._npcMapIdFunc(input);
    }

    private _npcIdFunc(input: ICustomDataInput)
    {
        this.npcId = input.readInt();
    }

    private _npcActionIdFunc(input: ICustomDataInput)
    {
        this.npcActionId = input.readByte();
        if(this.npcActionId < 0)
        {
            throw new Error("Forbidden value (" + this.npcActionId + ") on element of NpcGenericActionRequestMessage.npcActionId.");
        }
    }

    private _npcMapIdFunc(input: ICustomDataInput)
    {
        this.npcMapId = input.readDouble();
        if(this.npcMapId < 0 || this.npcMapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.npcMapId + ") on element of NpcGenericActionRequestMessage.npcMapId.");
        }
    }

}