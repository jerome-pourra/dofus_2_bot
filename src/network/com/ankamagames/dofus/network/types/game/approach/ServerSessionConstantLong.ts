import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { ServerSessionConstant } from "./ServerSessionConstant";

export class ServerSessionConstantLong extends ServerSessionConstant
{

	public static readonly protocolId: number = 4175;

	public value: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ServerSessionConstantLong(input);
    }

    private deserializeAs_ServerSessionConstantLong(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._valueFunc(input);
    }

    private _valueFunc(input: ICustomDataInput)
    {
        this.value = input.readDouble();
        if(this.value < -9007199254740992 || this.value > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.value + ") on element of ServerSessionConstantLong.value.");
        }
    }

}