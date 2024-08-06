import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { Shortcut } from "./Shortcut";

export class ShortcutObject extends Shortcut implements INetworkType
{

	public static readonly protocolId: number = 8861;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ShortcutObject.protocolId;
    }

    public initShortcutObject(slot: number = 0): ShortcutObject
    {
        super.initShortcut(slot);
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ShortcutObject(output);
    }

    public serializeAs_ShortcutObject(output: ICustomDataOutput)
    {
        super.serializeAs_Shortcut(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ShortcutObject(input);
    }

    private deserializeAs_ShortcutObject(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}