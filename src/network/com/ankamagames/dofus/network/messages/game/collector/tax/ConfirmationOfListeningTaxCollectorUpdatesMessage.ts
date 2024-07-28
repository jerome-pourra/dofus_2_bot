import { TaxCollectorInformations } from "./../../../../types/game/collector/tax/TaxCollectorInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ConfirmationOfListeningTaxCollectorUpdatesMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1625;

	public information: TaxCollectorInformations;

    public constructor()
    {
        super();
        this.information = new TaxCollectorInformations();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ConfirmationOfListeningTaxCollectorUpdatesMessage(input);
    }

    private deserializeAs_ConfirmationOfListeningTaxCollectorUpdatesMessage(input: ICustomDataInput)
    {
        this.information = new TaxCollectorInformations();
        this.information.deserialize(input);
    }

}