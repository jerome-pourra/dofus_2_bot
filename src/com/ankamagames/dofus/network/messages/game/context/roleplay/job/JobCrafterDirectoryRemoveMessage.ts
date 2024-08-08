import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobCrafterDirectoryRemoveMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3245;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public jobId: number = 0;
	public playerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return JobCrafterDirectoryRemoveMessage.protocolId;
    }

    public isEndpointClient()
    {
        return JobCrafterDirectoryRemoveMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return JobCrafterDirectoryRemoveMessage.endpointServer;
    }

    public initJobCrafterDirectoryRemoveMessage(jobId: number = 0, playerId: number = 0): JobCrafterDirectoryRemoveMessage
    {
        this.jobId = jobId;
        this.playerId = playerId;
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
        this.serializeAs_JobCrafterDirectoryRemoveMessage(output);
    }

    public serializeAs_JobCrafterDirectoryRemoveMessage(output: ICustomDataOutput)
    {
        if(this.jobId < 0)
        {
            throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
        }
        output.writeByte(this.jobId);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobCrafterDirectoryRemoveMessage(input);
    }

    private deserializeAs_JobCrafterDirectoryRemoveMessage(input: ICustomDataInput)
    {
        this._jobIdFunc(input);
        this._playerIdFunc(input);
    }

    private _jobIdFunc(input: ICustomDataInput)
    {
        this.jobId = input.readByte();
        if(this.jobId < 0)
        {
            throw new Error("Forbidden value (" + this.jobId + ") on element of JobCrafterDirectoryRemoveMessage.jobId.");
        }
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of JobCrafterDirectoryRemoveMessage.playerId.");
        }
    }

}