import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class ServerSessionConstant implements INetworkType
{

	public static readonly protocolId: number = 9977;

	public id: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return ServerSessionConstant.protocolId;
    }

    public initServerSessionConstant(id: number = 0): ServerSessionConstant
    {
        this.id = id;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ServerSessionConstant(output);
    }

    public serializeAs_ServerSessionConstant(output: ICustomDataOutput)
    {
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarShort(this.id);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ServerSessionConstant(input);
    }

    private deserializeAs_ServerSessionConstant(input: ICustomDataInput)
    {
        this._idFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhShort();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of ServerSessionConstant.id.");
        }
    }

}