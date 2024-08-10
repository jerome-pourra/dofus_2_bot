import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartOkJobIndexMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1248;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public jobs: Array<number>;

    public constructor()
    {
        super();
        this.jobs = Array<number>();
    }

    public getMessageId()
    {
        return ExchangeStartOkJobIndexMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeStartOkJobIndexMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeStartOkJobIndexMessage.endpointServer;
    }

    public initExchangeStartOkJobIndexMessage(jobs: Array<number> = null): ExchangeStartOkJobIndexMessage
    {
        this.jobs = jobs;
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
        this.serializeAs_ExchangeStartOkJobIndexMessage(output);
    }

    public serializeAs_ExchangeStartOkJobIndexMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.jobs.length);
        for(var _i1: number = 0; _i1 < this.jobs.length; _i1++)
        {
            if(this.jobs[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.jobs[_i1] + ") on element 1 (starting at 1) of jobs.");
            }
            output.writeVarInt(this.jobs[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeStartOkJobIndexMessage(input);
    }

    private deserializeAs_ExchangeStartOkJobIndexMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _jobsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _jobsLen; _i1++)
        {
            _val1 = input.readVarUhInt();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of jobs.");
            }
            this.jobs.push(_val1);
        }
    }

}