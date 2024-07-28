import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class KothWinner
{

	public static readonly protocolId: number = 4121;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_KothWinner(input);
    }

    private deserializeAs_KothWinner(input: ICustomDataInput)
    {

    }

}