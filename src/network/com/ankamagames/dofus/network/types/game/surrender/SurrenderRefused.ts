import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SurrenderResponse } from "./SurrenderResponse";

export class SurrenderRefused extends SurrenderResponse
{

	public static readonly protocolId: number = 8906;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderRefused(input);
    }

    private deserializeAs_SurrenderRefused(input: ICustomDataInput)
    {

    }

}