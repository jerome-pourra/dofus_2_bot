import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { ShortcutObject } from "./ShortcutObject";

export class ShortcutObjectPreset extends ShortcutObject
{

	public static readonly protocolId: number = 1697;

	public presetId: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ShortcutObjectPreset(input);
    }

    private deserializeAs_ShortcutObjectPreset(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._presetIdFunc(input);
    }

    private _presetIdFunc(input: ICustomDataInput)
    {
        this.presetId = input.readShort();
    }

}