import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { UpdateMountCharacteristic } from "./UpdateMountCharacteristic";

export class UpdateMountIntegerCharacteristic extends UpdateMountCharacteristic implements INetworkType
{

	public static readonly protocolId: number = 5600;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public value: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return UpdateMountIntegerCharacteristic.protocolId;
    }

    public isEndpointClient()
    {
        return UpdateMountIntegerCharacteristic.endpointClient;
    }

    public isEndpointServer()
    {
        return UpdateMountIntegerCharacteristic.endpointServer;
    }

    public initUpdateMountIntegerCharacteristic(type: number = 0, value: number = 0): UpdateMountIntegerCharacteristic
    {
        super.initUpdateMountCharacteristic(type);
        this.value = value;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_UpdateMountIntegerCharacteristic(output);
    }

    public serializeAs_UpdateMountIntegerCharacteristic(output: ICustomDataOutput)
    {
        super.serializeAs_UpdateMountCharacteristic(output);
        output.writeInt(this.value);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_UpdateMountIntegerCharacteristic(input);
    }

    private deserializeAs_UpdateMountIntegerCharacteristic(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._valueFunc(input);
    }

    private _valueFunc(input: ICustomDataInput)
    {
        this.value = input.readInt();
    }

}