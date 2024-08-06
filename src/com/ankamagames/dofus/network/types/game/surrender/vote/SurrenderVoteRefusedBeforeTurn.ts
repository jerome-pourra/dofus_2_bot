import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SurrenderVoteRefused } from "./SurrenderVoteRefused";

export class SurrenderVoteRefusedBeforeTurn extends SurrenderVoteRefused implements INetworkType
{

	public static readonly protocolId: number = 9709;

	public minTurnForSurrenderVote: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SurrenderVoteRefusedBeforeTurn.protocolId;
    }

    public initSurrenderVoteRefusedBeforeTurn(minTurnForSurrenderVote: number = 0): SurrenderVoteRefusedBeforeTurn
    {
        this.minTurnForSurrenderVote = minTurnForSurrenderVote;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SurrenderVoteRefusedBeforeTurn(output);
    }

    public serializeAs_SurrenderVoteRefusedBeforeTurn(output: ICustomDataOutput)
    {
        super.serializeAs_SurrenderVoteRefused(output);
        output.writeInt(this.minTurnForSurrenderVote);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderVoteRefusedBeforeTurn(input);
    }

    private deserializeAs_SurrenderVoteRefusedBeforeTurn(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._minTurnForSurrenderVoteFunc(input);
    }

    private _minTurnForSurrenderVoteFunc(input: ICustomDataInput)
    {
        this.minTurnForSurrenderVote = input.readInt();
    }

}