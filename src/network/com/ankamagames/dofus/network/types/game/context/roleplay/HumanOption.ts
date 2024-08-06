import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class HumanOption implements INetworkType
{

	public static readonly protocolId: number = 7701;

    public constructor()
    {

    }

    public getTypeId()
    {
        return HumanOption.protocolId;
    }

    public initHumanOption(): HumanOption
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HumanOption(output);
    }

    public serializeAs_HumanOption(output: ICustomDataOutput)
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