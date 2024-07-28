import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightResultFighterListEntry } from "./FightResultFighterListEntry";

export class FightResultMutantListEntry extends FightResultFighterListEntry
{

	public static readonly protocolId: number = 2795;

	public level: number = 0;

    public constructor()
    {
        super();
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