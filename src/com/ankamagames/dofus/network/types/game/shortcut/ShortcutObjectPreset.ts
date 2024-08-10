import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { ShortcutObject } from "./ShortcutObject";

export class ShortcutObjectPreset extends ShortcutObject implements INetworkType
{

	public static readonly protocolId: number = 1697;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public presetId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ShortcutObjectPreset.protocolId;
    }

    public isEndpointClient()
    {
        return ShortcutObjectPreset.endpointClient;
    }

    public isEndpointServer()
    {
        return ShortcutObjectPreset.endpointServer;
    }

    public initShortcutObjectPreset(slot: number = 0, presetId: number = 0): ShortcutObjectPreset
    {
        super.initShortcutObject(slot);
        this.presetId = presetId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ShortcutObjectPreset(output);
    }

    public serializeAs_ShortcutObjectPreset(output: ICustomDataOutput)
    {
        super.serializeAs_ShortcutObject(output);
        output.writeShort(this.presetId);
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