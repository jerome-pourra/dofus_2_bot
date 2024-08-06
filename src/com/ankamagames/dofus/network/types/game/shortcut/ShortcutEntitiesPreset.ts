import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { Shortcut } from "./Shortcut";

export class ShortcutEntitiesPreset extends Shortcut implements INetworkType
{

	public static readonly protocolId: number = 3288;

	public presetId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ShortcutEntitiesPreset.protocolId;
    }

    public initShortcutEntitiesPreset(slot: number = 0, presetId: number = 0): ShortcutEntitiesPreset
    {
        super.initShortcut(slot);
        this.presetId = presetId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ShortcutEntitiesPreset(output);
    }

    public serializeAs_ShortcutEntitiesPreset(output: ICustomDataOutput)
    {
        super.serializeAs_Shortcut(output);
        output.writeShort(this.presetId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ShortcutEntitiesPreset(input);
    }

    private deserializeAs_ShortcutEntitiesPreset(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._presetIdFunc(input);
    }

    private _presetIdFunc(input: ICustomDataInput)
    {
        this.presetId = input.readShort();
    }

}