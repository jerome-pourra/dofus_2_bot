import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { StatisticData } from "./StatisticData";

export class StatisticDataBoolean extends StatisticData implements INetworkType
{

	public static readonly protocolId: number = 7901;

	public value: boolean = false;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return StatisticDataBoolean.protocolId;
    }

    public initStatisticDataBoolean(value: boolean = false): StatisticDataBoolean
    {
        this.value = value;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_StatisticDataBoolean(output);
    }

    public serializeAs_StatisticDataBoolean(output: ICustomDataOutput)
    {
        super.serializeAs_StatisticData(output);
        output.writeBoolean(this.value);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StatisticDataBoolean(input);
    }

    private deserializeAs_StatisticDataBoolean(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._valueFunc(input);
    }

    private _valueFunc(input: ICustomDataInput)
    {
        this.value = input.readBoolean();
    }

}