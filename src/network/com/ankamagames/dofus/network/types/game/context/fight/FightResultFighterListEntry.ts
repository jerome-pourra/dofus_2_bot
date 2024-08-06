import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightLoot } from "./FightLoot";
import { FightResultListEntry } from "./FightResultListEntry";

export class FightResultFighterListEntry extends FightResultListEntry implements INetworkType
{

	public static readonly protocolId: number = 613;

	public id: number = 0;
	public alive: boolean = false;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightResultFighterListEntry.protocolId;
    }

    public initFightResultFighterListEntry(outcome: number = 0, wave: number = 0, rewards: FightLoot = null, id: number = 0, alive: boolean = false): FightResultFighterListEntry
    {
        super.initFightResultListEntry(outcome,wave,rewards);
        this.id = id;
        this.alive = alive;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightResultFighterListEntry(output);
    }

    public serializeAs_FightResultFighterListEntry(output: ICustomDataOutput)
    {
        super.serializeAs_FightResultListEntry(output);
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeDouble(this.id);
        output.writeBoolean(this.alive);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightResultFighterListEntry(input);
    }

    private deserializeAs_FightResultFighterListEntry(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._idFunc(input);
        this._aliveFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readDouble();
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of FightResultFighterListEntry.id.");
        }
    }

    private _aliveFunc(input: ICustomDataInput)
    {
        this.alive = input.readBoolean();
    }

}