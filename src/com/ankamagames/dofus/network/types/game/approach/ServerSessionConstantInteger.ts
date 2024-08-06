import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { ServerSessionConstant } from "./ServerSessionConstant";

export class ServerSessionConstantInteger extends ServerSessionConstant implements INetworkType
{

	public static readonly protocolId: number = 2867;

	public value: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ServerSessionConstantInteger.protocolId;
    }

    public initServerSessionConstantInteger(id: number = 0, value: number = 0): ServerSessionConstantInteger
    {
        super.initServerSessionConstant(id);
        this.value = value;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ServerSessionConstantInteger(output);
    }

    public serializeAs_ServerSessionConstantInteger(output: ICustomDataOutput)
    {
        super.serializeAs_ServerSessionConstant(output);
        output.writeInt(this.value);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ServerSessionConstantInteger(input);
    }

    private deserializeAs_ServerSessionConstantInteger(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._valueFunc(input);
    }

    private _valueFunc(input: ICustomDataInput)
    {
        this.value = input.readInt();
    }

}