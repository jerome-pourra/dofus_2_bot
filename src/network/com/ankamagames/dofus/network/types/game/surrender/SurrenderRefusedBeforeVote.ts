import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SurrenderRefused } from "./SurrenderRefused";

export class SurrenderRefusedBeforeVote extends SurrenderRefused implements INetworkType
{

	public static readonly protocolId: number = 2726;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SurrenderRefusedBeforeVote.protocolId;
    }

    public initSurrenderRefusedBeforeVote(): SurrenderRefusedBeforeVote
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SurrenderRefusedBeforeVote(output);
    }

    public serializeAs_SurrenderRefusedBeforeVote(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderRefusedBeforeVote(input);
    }

    private deserializeAs_SurrenderRefusedBeforeVote(input: ICustomDataInput)
    {

    }

}