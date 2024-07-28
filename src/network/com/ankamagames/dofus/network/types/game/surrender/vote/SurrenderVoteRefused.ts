import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SurrenderVoteResponse } from "./SurrenderVoteResponse";

export class SurrenderVoteRefused extends SurrenderVoteResponse
{

	public static readonly protocolId: number = 1140;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderVoteRefused(input);
    }

    private deserializeAs_SurrenderVoteRefused(input: ICustomDataInput)
    {

    }

}