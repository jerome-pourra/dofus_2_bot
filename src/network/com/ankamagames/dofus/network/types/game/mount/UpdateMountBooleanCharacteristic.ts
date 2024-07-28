import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { UpdateMountCharacteristic } from "./UpdateMountCharacteristic";

export class UpdateMountBooleanCharacteristic extends UpdateMountCharacteristic
{

	public static readonly protocolId: number = 2137;

	public value: boolean = false;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_UpdateMountBooleanCharacteristic(input);
    }

    private deserializeAs_UpdateMountBooleanCharacteristic(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._valueFunc(input);
    }

    private _valueFunc(input: ICustomDataInput)
    {
        this.value = input.readBoolean();
    }

}