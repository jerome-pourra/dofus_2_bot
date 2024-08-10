import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightLoot } from "./FightLoot";
import { FightResultFighterListEntry } from "./FightResultFighterListEntry";

export class FightResultMutantListEntry extends FightResultFighterListEntry implements INetworkType
{

	public static readonly protocolId: number = 2795;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public level: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightResultMutantListEntry.protocolId;
    }

    public isEndpointClient()
    {
        return FightResultMutantListEntry.endpointClient;
    }

    public isEndpointServer()
    {
        return FightResultMutantListEntry.endpointServer;
    }

    public initFightResultMutantListEntry(outcome: number = 0, wave: number = 0, rewards: FightLoot = null, id: number = 0, alive: boolean = false, level: number = 0): FightResultMutantListEntry
    {
        super.initFightResultFighterListEntry(outcome,wave,rewards,id,alive);
        this.level = level;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightResultMutantListEntry(output);
    }

    public serializeAs_FightResultMutantListEntry(output: ICustomDataOutput)
    {
        super.serializeAs_FightResultFighterListEntry(output);
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeVarShort(this.level);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightResultMutantListEntry(input);
    }

    private deserializeAs_FightResultMutantListEntry(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._levelFunc(input);
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readVarUhShort();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of FightResultMutantListEntry.level.");
        }
    }

}