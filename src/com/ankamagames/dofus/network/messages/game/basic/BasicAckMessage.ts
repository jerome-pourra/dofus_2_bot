import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicAckMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9375;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public seq: number = 0;
	public lastPacketId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BasicAckMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BasicAckMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BasicAckMessage.endpointServer;
    }

    public initBasicAckMessage(seq: number = 0, lastPacketId: number = 0): BasicAckMessage
    {
        this.seq = seq;
        this.lastPacketId = lastPacketId;
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
        this.serializeAs_BasicAckMessage(output);
    }

    public serializeAs_BasicAckMessage(output: ICustomDataOutput)
    {
        if(this.seq < 0)
        {
            throw new Error("Forbidden value (" + this.seq + ") on element seq.");
        }
        output.writeVarInt(this.seq);
        if(this.lastPacketId < 0)
        {
            throw new Error("Forbidden value (" + this.lastPacketId + ") on element lastPacketId.");
        }
        output.writeVarShort(this.lastPacketId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BasicAckMessage(input);
    }

    private deserializeAs_BasicAckMessage(input: ICustomDataInput)
    {
        this._seqFunc(input);
        this._lastPacketIdFunc(input);
    }

    private _seqFunc(input: ICustomDataInput)
    {
        this.seq = input.readVarUhInt();
        if(this.seq < 0)
        {
            throw new Error("Forbidden value (" + this.seq + ") on element of BasicAckMessage.seq.");
        }
    }

    private _lastPacketIdFunc(input: ICustomDataInput)
    {
        this.lastPacketId = input.readVarUhShort();
        if(this.lastPacketId < 0)
        {
            throw new Error("Forbidden value (" + this.lastPacketId + ") on element of BasicAckMessage.lastPacketId.");
        }
    }

}