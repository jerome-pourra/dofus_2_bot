import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { Shortcut } from "./Shortcut";

export class ShortcutSpell extends Shortcut implements INetworkType
{

	public static readonly protocolId: number = 576;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public spellId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ShortcutSpell.protocolId;
    }

    public isEndpointClient()
    {
        return ShortcutSpell.endpointClient;
    }

    public isEndpointServer()
    {
        return ShortcutSpell.endpointServer;
    }

    public initShortcutSpell(slot: number = 0, spellId: number = 0): ShortcutSpell
    {
        super.initShortcut(slot);
        this.spellId = spellId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ShortcutSpell(output);
    }

    public serializeAs_ShortcutSpell(output: ICustomDataOutput)
    {
        super.serializeAs_Shortcut(output);
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
        }
        output.writeVarShort(this.spellId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ShortcutSpell(input);
    }

    private deserializeAs_ShortcutSpell(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._spellIdFunc(input);
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readVarUhShort();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of ShortcutSpell.spellId.");
        }
    }

}