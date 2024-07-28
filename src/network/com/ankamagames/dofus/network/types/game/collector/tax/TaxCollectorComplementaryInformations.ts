import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class TaxCollectorComplementaryInformations
{

	public static readonly protocolId: number = 1982;

    public constructor()
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