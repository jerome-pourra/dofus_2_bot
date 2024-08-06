import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { Shortcut } from "./Shortcut";

export class ShortcutEmote extends Shortcut implements INetworkType
{

	public static readonly protocolId: number = 1189;

	public emoteId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ShortcutEmote.protocolId;
    }

    public initShortcutEmote(slot: number = 0, emoteId: number = 0): ShortcutEmote
    {
        super.initShortcut(slot);
        this.emoteId = emoteId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ShortcutEmote(output);
    }

    public serializeAs_ShortcutEmote(output: ICustomDataOutput)
    {
        super.serializeAs_Shortcut(output);
        if(this.emoteId < 0 || this.emoteId > 65535)
        {
            throw new Error("Forbidden value (" + this.emoteId + ") on element emoteId.");
        }
        output.writeShort(this.emoteId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ShortcutEmote(input);
    }

    private deserializeAs_ShortcutEmote(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._emoteIdFunc(input);
    }

    private _emoteIdFunc(input: ICustomDataInput)
    {
        this.emoteId = input.readUnsignedShort();
        if(this.emoteId < 0 || this.emoteId > 65535)
        {
            throw new Error("Forbidden value (" + this.emoteId + ") on element of ShortcutEmote.emoteId.");
        }
    }

}