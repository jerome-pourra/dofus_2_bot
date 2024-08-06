import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../jerakine/network/INetworkType";

export class AbstractPlayerSearchInformation implements INetworkType
{

	public static readonly protocolId: number = 1300;

    public constructor()
    {

    }

    public getTypeId()
    {
        return AbstractPlayerSearchInformation.protocolId;
    }

    public initAbstractPlayerSearchInformation(): AbstractPlayerSearchInformation
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AbstractPlayerSearchInformation(output);
    }

    public serializeAs_AbstractPlayerSearchInformation(output: ICustomDataOutput)
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