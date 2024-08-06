import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightLoot } from "./FightLoot";

export class FightResultListEntry implements INetworkType
{

	public static readonly protocolId: number = 3594;

	public outcome: number = 0;
	public wave: number = 0;
	public rewards: FightLoot;

    public constructor()
    {
        this.rewards = new FightLoot();
    }

    public getTypeId()
    {
        return FightResultListEntry.protocolId;
    }

    public initFightResultListEntry(outcome: number = 0, wave: number = 0, rewards: FightLoot = null): FightResultListEntry
    {
        this.outcome = outcome;
        this.wave = wave;
        this.rewards = rewards;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightResultListEntry(output);
    }

    public serializeAs_FightResultListEntry(output: ICustomDataOutput)
    {
        output.writeVarShort(this.outcome);
        if(this.wave < 0)
        {
            throw new Error("Forbidden value (" + this.wave + ") on element wave.");
        }
        output.writeByte(this.wave);
        this.rewards.serializeAs_FightLoot(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightResultListEntry(input);
    }

    private deserializeAs_FightResultListEntry(input: ICustomDataInput)
    {
        this._outcomeFunc(input);
        this._waveFunc(input);
        this.rewards = new FightLoot();
        this.rewards.deserialize(input);
    }

    private _outcomeFunc(input: ICustomDataInput)
    {
        this.outcome = input.readVarUhShort();
        if(this.outcome < 0)
        {
            throw new Error("Forbidden value (" + this.outcome + ") on element of FightResultListEntry.outcome.");
        }
    }

    private _waveFunc(input: ICustomDataInput)
    {
        this.wave = input.readByte();
        if(this.wave < 0)
        {
            throw new Error("Forbidden value (" + this.wave + ") on element of FightResultListEntry.wave.");
        }
    }

}