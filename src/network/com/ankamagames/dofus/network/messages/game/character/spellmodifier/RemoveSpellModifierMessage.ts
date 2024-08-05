import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class RemoveSpellModifierMessage extends NetworkMessage
{

	public static readonly protocolId: number = 194;

	public actorId: number = 0;
	public actionType: number = 0;
	public modifierType: number = 0;
	public spellId: number = 0;

    public constructor()
    {
        super();
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
        this.deserializeAs_RemoveSpellModifierMessage(input);
    }

    private deserializeAs_RemoveSpellModifierMessage(input: ICustomDataInput)
    {
        this._actorIdFunc(input);
        this._actionTypeFunc(input);
        this._modifierTypeFunc(input);
        this._spellIdFunc(input);
    }

    private _actorIdFunc(input: ICustomDataInput)
    {
        this.actorId = input.readDouble();
        if(this.actorId < -9007199254740992 || this.actorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.actorId + ") on element of RemoveSpellModifierMessage.actorId.");
        }
    }

    private _actionTypeFunc(input: ICustomDataInput)
    {
        this.actionType = input.readByte();
        if(this.actionType < 0)
        {
            throw new Error("Forbidden value (" + this.actionType + ") on element of RemoveSpellModifierMessage.actionType.");
        }
    }

    private _modifierTypeFunc(input: ICustomDataInput)
    {
        this.modifierType = input.readByte();
        if(this.modifierType < 0)
        {
            throw new Error("Forbidden value (" + this.modifierType + ") on element of RemoveSpellModifierMessage.modifierType.");
        }
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readVarUhShort();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of RemoveSpellModifierMessage.spellId.");
        }
    }

}