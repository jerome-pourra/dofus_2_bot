import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { StatisticData } from "./StatisticData";

export class StatisticDataString extends StatisticData implements INetworkType
{

	public static readonly protocolId: number = 4102;

	public value: string = "";

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return StatisticDataString.protocolId;
    }

    public initStatisticDataString(value: string = ""): StatisticDataString
    {
        this.value = value;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_StatisticDataString(output);
    }

    public serializeAs_StatisticDataString(output: ICustomDataOutput)
    {
        super.serializeAs_StatisticData(output);
        output.writeUTF(this.value);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StatisticDataString(input);
    }

    private deserializeAs_StatisticDataString(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._valueFunc(input);
    }

    private _valueFunc(input: ICustomDataInput)
    {
        this.value = input.readUTF();
    }

}