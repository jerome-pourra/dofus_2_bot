import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class TaxCollectorComplementaryInformations implements INetworkType
{

	public static readonly protocolId: number = 1982;

    public constructor()
    {

    }

    public getTypeId()
    {
        return TaxCollectorComplementaryInformations.protocolId;
    }

    public initTaxCollectorComplementaryInformations(): TaxCollectorComplementaryInformations
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TaxCollectorComplementaryInformations(output);
    }

    public serializeAs_TaxCollectorComplementaryInformations(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorComplementaryInformations(input);
    }

    private deserializeAs_TaxCollectorComplementaryInformations(input: ICustomDataInput)
    {

    }

}