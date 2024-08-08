import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { ServerSessionConstant } from "./ServerSessionConstant";

export class ServerSessionConstantLong extends ServerSessionConstant implements INetworkType
{

	public static readonly protocolId: number = 4175;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public value: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ServerSessionConstantLong.protocolId;
    }

    public isEndpointClient()
    {
        return ServerSessionConstantLong.endpointClient;
    }

    public isEndpointServer()
    {
        return ServerSessionConstantLong.endpointServer;
    }

    public initServerSessionConstantLong(id: number = 0, value: number = 0): ServerSessionConstantLong
    {
        super.initServerSessionConstant(id);
        this.value = value;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ServerSessionConstantLong(output);
    }

    public serializeAs_ServerSessionConstantLong(output: ICustomDataOutput)
    {
        super.serializeAs_ServerSessionConstant(output);
        if(this.value < -9007199254740992 || this.value > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.value + ") on element value.");
        }
        output.writeDouble(this.value);
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