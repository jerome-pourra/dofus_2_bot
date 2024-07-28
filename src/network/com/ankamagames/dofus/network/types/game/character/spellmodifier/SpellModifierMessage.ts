import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class SpellModifierMessage
{

	public static readonly protocolId: number = 2892;

	public spellId: number = 0;
	public actionType: number = 0;
	public modifierType: number = 0;
	public context: number = 0;
	public equipment: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SpellModifierMessage(input);
    }

    private deserializeAs_SpellModifierMessage(input: ICustomDataInput)
    {
        this._spellIdFunc(input);
        this._actionTypeFunc(input);
        this._modifierTypeFunc(input);
        this._contextFunc(input);
        this._equipmentFunc(input);
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readVarUhShort();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of SpellModifierMessage.spellId.");
        }
    }

    private _actionTypeFunc(input: ICustomDataInput)
    {
        this.actionType = input.readByte();
        if(this.actionType < 0)
        {
            throw new Error("Forbidden value (" + this.actionType + ") on element of SpellModifierMessage.actionType.");
        }
    }

    private _modifierTypeFunc(input: ICustomDataInput)
    {
        this.modifierType = input.readByte();
        if(this.modifierType < 0)
        {
            throw new Error("Forbidden value (" + this.modifierType + ") on element of SpellModifierMessage.modifierType.");
        }
    }

    private _contextFunc(input: ICustomDataInput)
    {
        this.context = input.readInt();
    }

    private _equipmentFunc(input: ICustomDataInput)
    {
        this.equipment = input.readInt();
    }

}