import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class HumanOption
{

	public static readonly protocolId: number = 7701;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HumanOption(input);
    }

    private deserializeAs_HumanOption(input: ICustomDataInput)
    {

    }

}