import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { StatisticData } from "./StatisticData";

export class StatisticDataShort extends StatisticData implements INetworkType
{

	public static readonly protocolId: number = 1762;

	public value: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return StatisticDataShort.protocolId;
    }

    public initStatisticDataShort(value: number = 0): StatisticDataShort
    {
        this.value = value;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_StatisticDataShort(output);
    }

    public serializeAs_StatisticDataShort(output: ICustomDataOutput)
    {
        super.serializeAs_StatisticData(output);
        output.writeShort(this.value);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StatisticDataShort(input);
    }

    private deserializeAs_StatisticDataShort(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._valueFunc(input);
    }

    private _valueFunc(input: ICustomDataInput)
    {
        this.value = input.readShort();
    }

}