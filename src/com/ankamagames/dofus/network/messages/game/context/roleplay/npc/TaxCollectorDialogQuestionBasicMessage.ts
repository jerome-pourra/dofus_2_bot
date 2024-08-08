import { BasicAllianceInformations } from "./../../../../../types/game/context/roleplay/BasicAllianceInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorDialogQuestionBasicMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3500;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public allianceInfo: BasicAllianceInformations;

    public constructor()
    {
        super();
        this.allianceInfo = new BasicAllianceInformations();
    }

    public getMessageId()
    {
        return TaxCollectorDialogQuestionBasicMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TaxCollectorDialogQuestionBasicMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TaxCollectorDialogQuestionBasicMessage.endpointServer;
    }

    public initTaxCollectorDialogQuestionBasicMessage(allianceInfo: BasicAllianceInformations = null): TaxCollectorDialogQuestionBasicMessage
    {
        this.allianceInfo = allianceInfo;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TaxCollectorDialogQuestionBasicMessage(output);
    }

    public serializeAs_TaxCollectorDialogQuestionBasicMessage(output: ICustomDataOutput)
    {
        this.allianceInfo.serializeAs_BasicAllianceInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorDialogQuestionBasicMessage(input);
    }

    private deserializeAs_TaxCollectorDialogQuestionBasicMessage(input: ICustomDataInput)
    {
        this.allianceInfo = new BasicAllianceInformations();
        this.allianceInfo.deserialize(input);
    }

}