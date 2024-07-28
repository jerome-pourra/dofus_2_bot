import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class SurrenderResponse
{

	public static readonly protocolId: number = 8655;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderResponse(input);
    }

    private deserializeAs_SurrenderResponse(input: ICustomDataInput)
    {

    }

}