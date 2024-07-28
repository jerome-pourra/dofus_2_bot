import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SurrenderResponse } from "./SurrenderResponse";

export class SurrenderAccepted extends SurrenderResponse
{

	public static readonly protocolId: number = 8859;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderAccepted(input);
    }

    private deserializeAs_SurrenderAccepted(input: ICustomDataInput)
    {

    }

}