import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { StatisticData } from "./StatisticData";

export class StatisticDataByte extends StatisticData implements INetworkType
{

	public static readonly protocolId: number = 4573;

	public value: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return StatisticDataByte.protocolId;
    }

    public initStatisticDataByte(value: number = 0): StatisticDataByte
    {
        this.value = value;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_StatisticDataByte(output);
    }

    public serializeAs_StatisticDataByte(output: ICustomDataOutput)
    {
        super.serializeAs_StatisticData(output);
        output.writeByte(this.value);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StatisticDataByte(input);
    }

    private deserializeAs_StatisticDataByte(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._valueFunc(input);
    }

    private _valueFunc(input: ICustomDataInput)
    {
        this.value = input.readByte();
    }

}