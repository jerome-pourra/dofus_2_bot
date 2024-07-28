import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { AbstractGameActionFightTargetedAbilityMessage } from "./AbstractGameActionFightTargetedAbilityMessage";

export class GameActionFightSpellCastMessage extends AbstractGameActionFightTargetedAbilityMessage
{

	public static readonly protocolId: number = 2679;

	public spellId: number = 0;
	public spellLevel: number = 0;
	public portalsIds: Array<number>;

    public constructor()
    {
        super();
        this.portalsIds = Array<number>();
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
        this.deserializeAs_GameActionFightSpellCastMessage(input);
    }

    private deserializeAs_GameActionFightSpellCastMessage(input: ICustomDataInput)
    {
        let _val3: number = 0;
        super.deserialize(input);
        this._spellIdFunc(input);
        this._spellLevelFunc(input);
        let _portalsIdsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _portalsIdsLen; _i3++)
        {
            _val3 = input.readShort();
            this.portalsIds.push(_val3);
        }
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readVarUhShort();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of GameActionFightSpellCastMessage.spellId.");
        }
    }

    private _spellLevelFunc(input: ICustomDataInput)
    {
        this.spellLevel = input.readShort();
        if(this.spellLevel < 1 || this.spellLevel > 32767)
        {
            throw new Error("Forbidden value (" + this.spellLevel + ") on element of GameActionFightSpellCastMessage.spellLevel.");
        }
    }

}