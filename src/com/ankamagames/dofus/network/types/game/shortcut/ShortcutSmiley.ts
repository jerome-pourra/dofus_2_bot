import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { Shortcut } from "./Shortcut";

export class ShortcutSmiley extends Shortcut implements INetworkType
{

	public static readonly protocolId: number = 4118;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public smileyId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ShortcutSmiley.protocolId;
    }

    public isEndpointClient()
    {
        return ShortcutSmiley.endpointClient;
    }

    public isEndpointServer()
    {
        return ShortcutSmiley.endpointServer;
    }

    public initShortcutSmiley(slot: number = 0, smileyId: number = 0): ShortcutSmiley
    {
        super.initShortcut(slot);
        this.smileyId = smileyId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ShortcutSmiley(output);
    }

    public serializeAs_ShortcutSmiley(output: ICustomDataOutput)
    {
        super.serializeAs_Shortcut(output);
        if(this.smileyId < 0)
        {
            throw new Error("Forbidden value (" + this.smileyId + ") on element smileyId.");
        }
        output.writeVarShort(this.smileyId);
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