import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class UpdateMountCharacteristic implements INetworkType
{

	public static readonly protocolId: number = 470;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public type: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return UpdateMountCharacteristic.protocolId;
    }

    public isEndpointClient()
    {
        return UpdateMountCharacteristic.endpointClient;
    }

    public isEndpointServer()
    {
        return UpdateMountCharacteristic.endpointServer;
    }

    public initUpdateMountCharacteristic(type: number = 0): UpdateMountCharacteristic
    {
        this.type = type;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_UpdateMountCharacteristic(output);
    }

    public serializeAs_UpdateMountCharacteristic(output: ICustomDataOutput)
    {
        output.writeByte(this.type);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_UpdateMountCharacteristic(input);
    }

    private deserializeAs_UpdateMountCharacteristic(input: ICustomDataInput)
    {
        this._typeFunc(input);
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of UpdateMountCharacteristic.type.");
        }
    }

}