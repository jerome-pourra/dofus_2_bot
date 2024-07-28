import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../jerakine/network/INetworkType";

export class AbstractPlayerSearchInformation
{

	public static readonly protocolId: number = 1300;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AbstractPlayerSearchInformation(input);
    }

    private deserializeAs_AbstractPlayerSearchInformation(input: ICustomDataInput)
    {

    }

}