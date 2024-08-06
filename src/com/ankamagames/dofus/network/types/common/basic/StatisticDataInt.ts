import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { StatisticData } from "./StatisticData";

export class StatisticDataInt extends StatisticData implements INetworkType
{

	public static readonly protocolId: number = 7834;

	public value: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return StatisticDataInt.protocolId;
    }

    public initStatisticDataInt(value: number = 0): StatisticDataInt
    {
        this.value = value;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_StatisticDataInt(output);
    }

    public serializeAs_StatisticDataInt(output: ICustomDataOutput)
    {
        super.serializeAs_StatisticData(output);
        output.writeInt(this.value);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StatisticDataInt(input);
    }

    private deserializeAs_StatisticDataInt(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._valueFunc(input);
    }

    private _valueFunc(input: ICustomDataInput)
    {
        this.value = input.readInt();
    }

}