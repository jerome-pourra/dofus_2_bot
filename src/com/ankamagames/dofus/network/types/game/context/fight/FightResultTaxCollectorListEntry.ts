import { BasicAllianceInformations } from "./../roleplay/BasicAllianceInformations";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightLoot } from "./FightLoot";
import { FightResultFighterListEntry } from "./FightResultFighterListEntry";

export class FightResultTaxCollectorListEntry extends FightResultFighterListEntry implements INetworkType
{

	public static readonly protocolId: number = 6507;

	public allianceInfo: BasicAllianceInformations;

    public constructor()
    {
        super();
        this.allianceInfo = new BasicAllianceInformations();
    }

    public getTypeId()
    {
        return FightResultTaxCollectorListEntry.protocolId;
    }

    public initFightResultTaxCollectorListEntry(outcome: number = 0, wave: number = 0, rewards: FightLoot = null, id: number = 0, alive: boolean = false, allianceInfo: BasicAllianceInformations = null): FightResultTaxCollectorListEntry
    {
        super.initFightResultFighterListEntry(outcome,wave,rewards,id,alive);
        this.allianceInfo = allianceInfo;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightResultTaxCollectorListEntry(output);
    }

    public serializeAs_FightResultTaxCollectorListEntry(output: ICustomDataOutput)
    {
        super.serializeAs_FightResultFighterListEntry(output);
        this.allianceInfo.serializeAs_BasicAllianceInformations(output);
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