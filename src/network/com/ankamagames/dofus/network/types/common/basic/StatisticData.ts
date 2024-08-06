import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class StatisticData implements INetworkType
{

	public static readonly protocolId: number = 1815;

    public constructor()
    {

    }

    public getTypeId()
    {
        return StatisticData.protocolId;
    }

    public initStatisticData(): StatisticData
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_StatisticData(output);
    }

    public serializeAs_StatisticData(output: ICustomDataOutput)
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