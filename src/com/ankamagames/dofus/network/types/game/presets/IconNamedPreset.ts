import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { Preset } from "./Preset";
import { PresetsContainerPreset } from "./PresetsContainerPreset";

export class IconNamedPreset extends PresetsContainerPreset implements INetworkType
{

	public static readonly protocolId: number = 2553;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public iconId: number = 0;
	public name: string = "";

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return IconNamedPreset.protocolId;
    }

    public isEndpointClient()
    {
        return IconNamedPreset.endpointClient;
    }

    public isEndpointServer()
    {
        return IconNamedPreset.endpointServer;
    }

    public initIconNamedPreset(id: number = 0, presets: Array<Preset> = null, iconId: number = 0, name: string = ""): IconNamedPreset
    {
        super.initPresetsContainerPreset(id,presets);
        this.iconId = iconId;
        this.name = name;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_IconNamedPreset(output);
    }

    public serializeAs_IconNamedPreset(output: ICustomDataOutput)
    {
        super.serializeAs_PresetsContainerPreset(output);
        if(this.iconId < 0)
        {
            throw new Error("Forbidden value (" + this.iconId + ") on element iconId.");
        }
        output.writeShort(this.iconId);
        output.writeUTF(this.name);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IconNamedPreset(input);
    }

    private deserializeAs_IconNamedPreset(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._iconIdFunc(input);
        this._nameFunc(input);
    }

    private _iconIdFunc(input: ICustomDataInput)
    {
        this.iconId = input.readShort();
        if(this.iconId < 0)
        {
            throw new Error("Forbidden value (" + this.iconId + ") on element of IconNamedPreset.iconId.");
        }
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

}