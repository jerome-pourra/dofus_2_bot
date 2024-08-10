import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SurrenderVoteEndMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6083;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public voteResult: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SurrenderVoteEndMessage.protocolId;
    }

    public isEndpointClient()
    {
        return SurrenderVoteEndMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return SurrenderVoteEndMessage.endpointServer;
    }

    public initSurrenderVoteEndMessage(voteResult: boolean = false): SurrenderVoteEndMessage
    {
        this.voteResult = voteResult;
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
        this.serializeAs_SurrenderVoteEndMessage(output);
    }

    public serializeAs_SurrenderVoteEndMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.voteResult);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderVoteEndMessage(input);
    }

    private deserializeAs_SurrenderVoteEndMessage(input: ICustomDataInput)
    {
        this._voteResultFunc(input);
    }

    private _voteResultFunc(input: ICustomDataInput)
    {
        this.voteResult = input.readBoolean();
    }

}