import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { Shortcut } from "./Shortcut";

export class ShortcutSmiley extends Shortcut
{

	public static readonly protocolId: number = 4118;

	public smileyId: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ShortcutSmiley(input);
    }

    private deserializeAs_ShortcutSmiley(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._smileyIdFunc(input);
    }

    private _smileyIdFunc(input: ICustomDataInput)
    {
        this.smileyId = input.readVarUhShort();
        if(this.smileyId < 0)
        {
            throw new Error("Forbidden value (" + this.smileyId + ") on element of ShortcutSmiley.smileyId.");
        }
    }

}