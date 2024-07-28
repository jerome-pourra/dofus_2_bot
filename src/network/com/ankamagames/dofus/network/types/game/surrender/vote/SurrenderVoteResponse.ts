import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class SurrenderVoteResponse
{

	public static readonly protocolId: number = 3674;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderVoteResponse(input);
    }

    private deserializeAs_SurrenderVoteResponse(input: ICustomDataInput)
    {

    }

}