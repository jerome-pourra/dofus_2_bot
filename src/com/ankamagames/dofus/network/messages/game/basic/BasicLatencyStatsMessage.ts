import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicLatencyStatsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7194;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public latency: number = 0;
	public sampleCount: number = 0;
	public max: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BasicLatencyStatsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BasicLatencyStatsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BasicLatencyStatsMessage.endpointServer;
    }

    public initBasicLatencyStatsMessage(latency: number = 0, sampleCount: number = 0, max: number = 0): BasicLatencyStatsMessage
    {
        this.latency = latency;
        this.sampleCount = sampleCount;
        this.max = max;
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
        this.serializeAs_BasicLatencyStatsMessage(output);
    }

    public serializeAs_BasicLatencyStatsMessage(output: ICustomDataOutput)
    {
        if(this.latency < 0 || this.latency > 65535)
        {
            throw new Error("Forbidden value (" + this.latency + ") on element latency.");
        }
        output.writeShort(this.latency);
        if(this.sampleCount < 0)
        {
            throw new Error("Forbidden value (" + this.sampleCount + ") on element sampleCount.");
        }
        output.writeVarShort(this.sampleCount);
        if(this.max < 0)
        {
            throw new Error("Forbidden value (" + this.max + ") on element max.");
        }
        output.writeVarShort(this.max);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BasicLatencyStatsMessage(input);
    }

    private deserializeAs_BasicLatencyStatsMessage(input: ICustomDataInput)
    {
        this._latencyFunc(input);
        this._sampleCountFunc(input);
        this._maxFunc(input);
    }

    private _latencyFunc(input: ICustomDataInput)
    {
        this.latency = input.readUnsignedShort();
        if(this.latency < 0 || this.latency > 65535)
        {
            throw new Error("Forbidden value (" + this.latency + ") on element of BasicLatencyStatsMessage.latency.");
        }
    }

    private _sampleCountFunc(input: ICustomDataInput)
    {
        this.sampleCount = input.readVarUhShort();
        if(this.sampleCount < 0)
        {
            throw new Error("Forbidden value (" + this.sampleCount + ") on element of BasicLatencyStatsMessage.sampleCount.");
        }
    }

    private _maxFunc(input: ICustomDataInput)
    {
        this.max = input.readVarUhShort();
        if(this.max < 0)
        {
            throw new Error("Forbidden value (" + this.max + ") on element of BasicLatencyStatsMessage.max.");
        }
    }

}