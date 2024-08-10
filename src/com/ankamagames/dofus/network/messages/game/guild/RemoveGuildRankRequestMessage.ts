import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class RemoveGuildRankRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5524;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public rankId: number = 0;
	public newRankId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return RemoveGuildRankRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return RemoveGuildRankRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return RemoveGuildRankRequestMessage.endpointServer;
    }

    public initRemoveGuildRankRequestMessage(rankId: number = 0, newRankId: number = 0): RemoveGuildRankRequestMessage
    {
        this.rankId = rankId;
        this.newRankId = newRankId;
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
        this.serializeAs_RemoveGuildRankRequestMessage(output);
    }

    public serializeAs_RemoveGuildRankRequestMessage(output: ICustomDataOutput)
    {
        if(this.rankId < 0)
        {
            throw new Error("Forbidden value (" + this.rankId + ") on element rankId.");
        }
        output.writeVarInt(this.rankId);
        if(this.newRankId < 0)
        {
            throw new Error("Forbidden value (" + this.newRankId + ") on element newRankId.");
        }
        output.writeVarInt(this.newRankId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_RemoveGuildRankRequestMessage(input);
    }

    private deserializeAs_RemoveGuildRankRequestMessage(input: ICustomDataInput)
    {
        this._rankIdFunc(input);
        this._newRankIdFunc(input);
    }

    private _rankIdFunc(input: ICustomDataInput)
    {
        this.rankId = input.readVarUhInt();
        if(this.rankId < 0)
        {
            throw new Error("Forbidden value (" + this.rankId + ") on element of RemoveGuildRankRequestMessage.rankId.");
        }
    }

    private _newRankIdFunc(input: ICustomDataInput)
    {
        this.newRankId = input.readVarUhInt();
        if(this.newRankId < 0)
        {
            throw new Error("Forbidden value (" + this.newRankId + ") on element of RemoveGuildRankRequestMessage.newRankId.");
        }
    }

}