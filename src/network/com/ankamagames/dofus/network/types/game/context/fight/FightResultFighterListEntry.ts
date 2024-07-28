import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightResultListEntry } from "./FightResultListEntry";

export class FightResultFighterListEntry extends FightResultListEntry
{

	public static readonly protocolId: number = 613;

	public id: number = 0;
	public alive: boolean = false;

    public constructor()
    {
        super();
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