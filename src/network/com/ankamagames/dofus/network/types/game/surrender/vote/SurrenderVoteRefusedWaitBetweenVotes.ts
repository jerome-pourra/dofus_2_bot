import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SurrenderVoteRefused } from "./SurrenderVoteRefused";

export class SurrenderVoteRefusedWaitBetweenVotes extends SurrenderVoteRefused
{

	public static readonly protocolId: number = 5188;

	public nextVoteTimestamp: number = 0;

    public constructor()
    {
        super();
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