import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class UpdateMountCharacteristic
{

	public static readonly protocolId: number = 470;

	public type: number = 0;

    public constructor()
    {

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