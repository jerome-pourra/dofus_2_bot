import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class StatisticData
{

	public static readonly protocolId: number = 1815;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StatisticData(input);
    }

    private deserializeAs_StatisticData(input: ICustomDataInput)
    {

    }

}