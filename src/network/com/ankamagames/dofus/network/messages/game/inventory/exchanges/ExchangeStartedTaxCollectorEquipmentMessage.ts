import { TaxCollectorInformations } from "./../../../../types/game/collector/tax/TaxCollectorInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartedTaxCollectorEquipmentMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9293;

	public information: TaxCollectorInformations;

    public constructor()
    {
        super();
        this.information = new TaxCollectorInformations();
    }

    public getMessageId()
    {
        return ExchangeStartedTaxCollectorEquipmentMessage.protocolId;
    }

    public initExchangeStartedTaxCollectorEquipmentMessage(information: TaxCollectorInformations = null): ExchangeStartedTaxCollectorEquipmentMessage
    {
        this.information = information;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangeStartedTaxCollectorEquipmentMessage(output);
    }

    public serializeAs_ExchangeStartedTaxCollectorEquipmentMessage(output: ICustomDataOutput)
    {
        this.information.serializeAs_TaxCollectorInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeStartedTaxCollectorEquipmentMessage(input);
    }

    private deserializeAs_ExchangeStartedTaxCollectorEquipmentMessage(input: ICustomDataInput)
    {
        this.information = new TaxCollectorInformations();
        this.information.deserialize(input);
    }

}