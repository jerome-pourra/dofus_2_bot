import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class TaxCollectorComplementaryInformations implements INetworkType
{

	public static readonly protocolId: number = 1982;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {

    }

    public getTypeId()
    {
        return TaxCollectorComplementaryInformations.protocolId;
    }

    public isEndpointClient()
    {
        return TaxCollectorComplementaryInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return TaxCollectorComplementaryInformations.endpointServer;
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