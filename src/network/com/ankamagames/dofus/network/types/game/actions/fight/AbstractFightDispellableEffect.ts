import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class AbstractFightDispellableEffect
{

	public static readonly protocolId: number = 4079;

	public uid: number = 0;
	public targetId: number = 0;
	public turnDuration: number = 0;
	public dispelable: number = 1;
	public spellId: number = 0;
	public effectId: number = 0;
	public parentBoostUid: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AbstractFightDispellableEffect(input);
    }

    private deserializeAs_AbstractFightDispellableEffect(input: ICustomDataInput)
    {
        this._uidFunc(input);
        this._targetIdFunc(input);
        this._turnDurationFunc(input);
        this._dispelableFunc(input);
        this._spellIdFunc(input);
        this._effectIdFunc(input);
        this._parentBoostUidFunc(input);
    }

    private _uidFunc(input: ICustomDataInput)
    {
        this.uid = input.readVarUhInt();
        if(this.uid < 0)
        {
            throw new Error("Forbidden value (" + this.uid + ") on element of AbstractFightDispellableEffect.uid.");
        }
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of AbstractFightDispellableEffect.targetId.");
        }
    }

    private _turnDurationFunc(input: ICustomDataInput)
    {
        this.turnDuration = input.readShort();
    }

    private _dispelableFunc(input: ICustomDataInput)
    {
        this.dispelable = input.readByte();
        if(this.dispelable < 0)
        {
            throw new Error("Forbidden value (" + this.dispelable + ") on element of AbstractFightDispellableEffect.dispelable.");
        }
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readVarUhShort();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of AbstractFightDispellableEffect.spellId.");
        }
    }

    private _effectIdFunc(input: ICustomDataInput)
    {
        this.effectId = input.readVarUhInt();
        if(this.effectId < 0)
        {
            throw new Error("Forbidden value (" + this.effectId + ") on element of AbstractFightDispellableEffect.effectId.");
        }
    }

    private _parentBoostUidFunc(input: ICustomDataInput)
    {
        this.parentBoostUid = input.readVarUhInt();
        if(this.parentBoostUid < 0)
        {
            throw new Error("Forbidden value (" + this.parentBoostUid + ") on element of AbstractFightDispellableEffect.parentBoostUid.");
        }
    }

}