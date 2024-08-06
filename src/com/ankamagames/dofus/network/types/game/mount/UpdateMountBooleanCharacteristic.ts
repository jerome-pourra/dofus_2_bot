import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { UpdateMountCharacteristic } from "./UpdateMountCharacteristic";

export class UpdateMountBooleanCharacteristic extends UpdateMountCharacteristic implements INetworkType
{

	public static readonly protocolId: number = 2137;

	public value: boolean = false;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return UpdateMountBooleanCharacteristic.protocolId;
    }

    public initUpdateMountBooleanCharacteristic(type: number = 0, value: boolean = false): UpdateMountBooleanCharacteristic
    {
        super.initUpdateMountCharacteristic(type);
        this.value = value;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_UpdateMountBooleanCharacteristic(output);
    }

    public serializeAs_UpdateMountBooleanCharacteristic(output: ICustomDataOutput)
    {
        super.serializeAs_UpdateMountCharacteristic(output);
        output.writeBoolean(this.value);
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