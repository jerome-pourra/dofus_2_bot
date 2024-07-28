import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class Preset
{

	public static readonly protocolId: number = 3628;

	public id: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_Preset(input);
    }

    private deserializeAs_Preset(input: ICustomDataInput)
    {
        this._idFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readShort();
    }

}