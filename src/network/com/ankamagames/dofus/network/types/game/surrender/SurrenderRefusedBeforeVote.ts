import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SurrenderRefused } from "./SurrenderRefused";

export class SurrenderRefusedBeforeVote extends SurrenderRefused
{

	public static readonly protocolId: number = 2726;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderRefusedBeforeVote(input);
    }

    private deserializeAs_SurrenderRefusedBeforeVote(input: ICustomDataInput)
    {

    }

}