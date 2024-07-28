import { TaxCollectorBasicInformations } from "./../../../../types/game/collector/tax/TaxCollectorBasicInformations";
import { BasicAllianceInformations } from "./../../../../types/game/context/roleplay/BasicAllianceInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorAttackedResultMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4787;

	public deadOrAlive: boolean = false;
	public basicInfos: TaxCollectorBasicInformations;
	public alliance: BasicAllianceInformations;

    public constructor()
    {
        super();
        this.basicInfos = new TaxCollectorBasicInformations();
        this.alliance = new BasicAllianceInformations();
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