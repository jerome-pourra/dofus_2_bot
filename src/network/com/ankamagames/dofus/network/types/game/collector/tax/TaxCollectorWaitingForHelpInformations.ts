import { ProtectedEntityWaitingForHelpInfo } from "./../../fight/ProtectedEntityWaitingForHelpInfo";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { TaxCollectorComplementaryInformations } from "./TaxCollectorComplementaryInformations";

export class TaxCollectorWaitingForHelpInformations extends TaxCollectorComplementaryInformations
{

	public static readonly protocolId: number = 5931;

	public waitingForHelpInfo: ProtectedEntityWaitingForHelpInfo;

    public constructor()
    {
        super();
        this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorWaitingForHelpInformations(input);
    }

    private deserializeAs_TaxCollectorWaitingForHelpInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
        this.waitingForHelpInfo.deserialize(input);
    }

}