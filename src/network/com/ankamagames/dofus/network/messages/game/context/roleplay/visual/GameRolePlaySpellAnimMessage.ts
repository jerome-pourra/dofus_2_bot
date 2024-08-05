import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlaySpellAnimMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1173;

	public casterId: number = 0;
	public targetCellId: number = 0;
	public spellId: number = 0;
	public spellLevel: number = 0;
	public direction: number = 0;

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
        this.deserializeAs_GameRolePlaySpellAnimMessage(input);
    }

    private deserializeAs_GameRolePlaySpellAnimMessage(input: ICustomDataInput)
    {
        this._casterIdFunc(input);
        this._targetCellIdFunc(input);
        this._spellIdFunc(input);
        this._spellLevelFunc(input);
        this._directionFunc(input);
    }

    private _casterIdFunc(input: ICustomDataInput)
    {
        this.casterId = input.readVarUhLong();
        if(this.casterId < 0 || this.casterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.casterId + ") on element of GameRolePlaySpellAnimMessage.casterId.");
        }
    }

    private _targetCellIdFunc(input: ICustomDataInput)
    {
        this.targetCellId = input.readVarUhShort();
        if(this.targetCellId < 0 || this.targetCellId > 559)
        {
            throw new Error("Forbidden value (" + this.targetCellId + ") on element of GameRolePlaySpellAnimMessage.targetCellId.");
        }
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readVarUhShort();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of GameRolePlaySpellAnimMessage.spellId.");
        }
    }

    private _spellLevelFunc(input: ICustomDataInput)
    {
        this.spellLevel = input.readShort();
        if(this.spellLevel < 1 || this.spellLevel > 32767)
        {
            throw new Error("Forbidden value (" + this.spellLevel + ") on element of GameRolePlaySpellAnimMessage.spellLevel.");
        }
    }

    private _directionFunc(input: ICustomDataInput)
    {
        this.direction = input.readShort();
        if(this.direction < -1 || this.direction > 8)
        {
            throw new Error("Forbidden value (" + this.direction + ") on element of GameRolePlaySpellAnimMessage.direction.");
        }
    }

}