import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { Shortcut } from "./Shortcut";

export class ShortcutObject extends Shortcut
{

	public static readonly protocolId: number = 8861;

    public constructor()
    {
        super();
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