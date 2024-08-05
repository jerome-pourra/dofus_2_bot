import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { PresetsContainerPreset } from "./PresetsContainerPreset";

export class IconNamedPreset extends PresetsContainerPreset
{

	public static readonly protocolId: number = 2553;

	public iconId: number = 0;
	public name: string = "";

    public constructor()
    {
        super();
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