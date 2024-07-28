import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SurrenderVoteRefused } from "./SurrenderVoteRefused";

export class SurrenderVoteRefusedAlreadyAsked extends SurrenderVoteRefused
{

	public static readonly protocolId: number = 8978;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderVoteRefusedAlreadyAsked(input);
    }

    private deserializeAs_SurrenderVoteRefusedAlreadyAsked(input: ICustomDataInput)
    {

    }

}