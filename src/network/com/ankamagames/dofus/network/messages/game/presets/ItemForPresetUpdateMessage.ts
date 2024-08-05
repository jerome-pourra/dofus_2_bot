import { ItemForPreset } from "./../../../types/game/presets/ItemForPreset";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ItemForPresetUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6815;

	public presetId: number = 0;
	public presetItem: ItemForPreset;

    public constructor()
    {
        super();
        this.presetItem = new ItemForPreset();
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
        this.deserializeAs_ItemForPresetUpdateMessage(input);
    }

    private deserializeAs_ItemForPresetUpdateMessage(input: ICustomDataInput)
    {
        this._presetIdFunc(input);
        this.presetItem = new ItemForPreset();
        this.presetItem.deserialize(input);
    }

    private _presetIdFunc(input: ICustomDataInput)
    {
        this.presetId = input.readShort();
    }

}