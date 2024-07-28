import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicLatencyStatsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7194;

	public latency: number = 0;
	public sampleCount: number = 0;
	public max: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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