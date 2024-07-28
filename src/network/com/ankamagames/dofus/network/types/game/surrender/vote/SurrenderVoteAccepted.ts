import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SurrenderVoteResponse } from "./SurrenderVoteResponse";

export class SurrenderVoteAccepted extends SurrenderVoteResponse
{

	public static readonly protocolId: number = 8687;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderVoteAccepted(input);
    }

    private deserializeAs_SurrenderVoteAccepted(input: ICustomDataInput)
    {

    }

}