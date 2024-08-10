import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class StatisticData implements INetworkType
{

	public static readonly protocolId: number = 1815;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {

    }

    public getTypeId()
    {
        return StatisticData.protocolId;
    }

    public isEndpointClient()
    {
        return StatisticData.endpointClient;
    }

    public isEndpointServer()
    {
        return StatisticData.endpointServer;
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