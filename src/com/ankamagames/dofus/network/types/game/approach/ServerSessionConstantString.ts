import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { ServerSessionConstant } from "./ServerSessionConstant";

export class ServerSessionConstantString extends ServerSessionConstant implements INetworkType
{

	public static readonly protocolId: number = 7359;

	public value: string = "";

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ServerSessionConstantString.protocolId;
    }

    public initServerSessionConstantString(id: number = 0, value: string = ""): ServerSessionConstantString
    {
        super.initServerSessionConstant(id);
        this.value = value;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ServerSessionConstantString(output);
    }

    public serializeAs_ServerSessionConstantString(output: ICustomDataOutput)
    {
        super.serializeAs_ServerSessionConstant(output);
        output.writeUTF(this.value);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ServerSessionConstantString(input);
    }

    private deserializeAs_ServerSessionConstantString(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._valueFunc(input);
    }

    private _valueFunc(input: ICustomDataInput)
    {
        this.value = input.readUTF();
    }

}