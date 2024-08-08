import { TaxCollectorBasicInformations } from "./../../../../types/game/collector/tax/TaxCollectorBasicInformations";
import { BasicAllianceInformations } from "./../../../../types/game/context/roleplay/BasicAllianceInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorAttackedResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4787;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public deadOrAlive: boolean = false;
	public basicInfos: TaxCollectorBasicInformations;
	public alliance: BasicAllianceInformations;

    public constructor()
    {
        super();
        this.basicInfos = new TaxCollectorBasicInformations();
        this.alliance = new BasicAllianceInformations();
    }

    public getMessageId()
    {
        return TaxCollectorAttackedResultMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TaxCollectorAttackedResultMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TaxCollectorAttackedResultMessage.endpointServer;
    }

    public initTaxCollectorAttackedResultMessage(deadOrAlive: boolean = false, basicInfos: TaxCollectorBasicInformations = null, alliance: BasicAllianceInformations = null): TaxCollectorAttackedResultMessage
    {
        this.deadOrAlive = deadOrAlive;
        this.basicInfos = basicInfos;
        this.alliance = alliance;
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
        this.serializeAs_TaxCollectorAttackedResultMessage(output);
    }

    public serializeAs_TaxCollectorAttackedResultMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.deadOrAlive);
        this.basicInfos.serializeAs_TaxCollectorBasicInformations(output);
        this.alliance.serializeAs_BasicAllianceInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorAttackedResultMessage(input);
    }

    private deserializeAs_TaxCollectorAttackedResultMessage(input: ICustomDataInput)
    {
        this._deadOrAliveFunc(input);
        this.basicInfos = new TaxCollectorBasicInformations();
        this.basicInfos.deserialize(input);
        this.alliance = new BasicAllianceInformations();
        this.alliance.deserialize(input);
    }

    private _deadOrAliveFunc(input: ICustomDataInput)
    {
        this.deadOrAlive = input.readBoolean();
    }

}