import { BasicAllianceInformations } from "./../roleplay/BasicAllianceInformations";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightResultFighterListEntry } from "./FightResultFighterListEntry";

export class FightResultTaxCollectorListEntry extends FightResultFighterListEntry
{

	public static readonly protocolId: number = 6507;

	public allianceInfo: BasicAllianceInformations;

    public constructor()
    {
        super();
        this.allianceInfo = new BasicAllianceInformations();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightResultTaxCollectorListEntry(input);
    }

    private deserializeAs_FightResultTaxCollectorListEntry(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.allianceInfo = new BasicAllianceInformations();
        this.allianceInfo.deserialize(input);
    }

}