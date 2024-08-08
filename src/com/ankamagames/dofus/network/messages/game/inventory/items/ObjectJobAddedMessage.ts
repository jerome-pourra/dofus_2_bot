import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObjectJobAddedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5441;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public jobId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ObjectJobAddedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectJobAddedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectJobAddedMessage.endpointServer;
    }

    public initObjectJobAddedMessage(jobId: number = 0): ObjectJobAddedMessage
    {
        this.jobId = jobId;
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
        this.serializeAs_ObjectJobAddedMessage(output);
    }

    public serializeAs_ObjectJobAddedMessage(output: ICustomDataOutput)
    {
        if(this.jobId < 0)
        {
            throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
        }
        output.writeByte(this.jobId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectJobAddedMessage(input);
    }

    private deserializeAs_ObjectJobAddedMessage(input: ICustomDataInput)
    {
        this._jobIdFunc(input);
    }

    private _jobIdFunc(input: ICustomDataInput)
    {
        this.jobId = input.readByte();
        if(this.jobId < 0)
        {
            throw new Error("Forbidden value (" + this.jobId + ") on element of ObjectJobAddedMessage.jobId.");
        }
    }

}