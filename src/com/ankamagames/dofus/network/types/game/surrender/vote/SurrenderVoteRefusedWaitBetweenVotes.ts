import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SurrenderVoteRefused } from "./SurrenderVoteRefused";

export class SurrenderVoteRefusedWaitBetweenVotes extends SurrenderVoteRefused implements INetworkType
{

	public static readonly protocolId: number = 5188;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public nextVoteTimestamp: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SurrenderVoteRefusedWaitBetweenVotes.protocolId;
    }

    public isEndpointClient()
    {
        return SurrenderVoteRefusedWaitBetweenVotes.endpointClient;
    }

    public isEndpointServer()
    {
        return SurrenderVoteRefusedWaitBetweenVotes.endpointServer;
    }

    public initSurrenderVoteRefusedWaitBetweenVotes(nextVoteTimestamp: number = 0): SurrenderVoteRefusedWaitBetweenVotes
    {
        this.nextVoteTimestamp = nextVoteTimestamp;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SurrenderVoteRefusedWaitBetweenVotes(output);
    }

    public serializeAs_SurrenderVoteRefusedWaitBetweenVotes(output: ICustomDataOutput)
    {
        super.serializeAs_SurrenderVoteRefused(output);
        output.writeInt(this.nextVoteTimestamp);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderVoteRefusedWaitBetweenVotes(input);
    }

    private deserializeAs_SurrenderVoteRefusedWaitBetweenVotes(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._nextVoteTimestampFunc(input);
    }

    private _nextVoteTimestampFunc(input: ICustomDataInput)
    {
        this.nextVoteTimestamp = input.readInt();
    }

}