import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class BufferInformation implements INetworkType
{

	public static readonly protocolId: number = 7749;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public id: number = 0;
	public amount: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return BufferInformation.protocolId;
    }

    public isEndpointClient()
    {
        return BufferInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return BufferInformation.endpointServer;
    }

    public initBufferInformation(id: number = 0, amount: number = 0): BufferInformation
    {
        this.id = id;
        this.amount = amount;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_BufferInformation(output);
    }

    public serializeAs_BufferInformation(output: ICustomDataOutput)
    {
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarLong(this.id);
        if(this.amount < 0 || this.amount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.amount + ") on element amount.");
        }
        output.writeVarLong(this.amount);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BufferInformation(input);
    }

    private deserializeAs_BufferInformation(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._amountFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhLong();
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of BufferInformation.id.");
        }
    }

    private _amountFunc(input: ICustomDataInput)
    {
        this.amount = input.readVarUhLong();
        if(this.amount < 0 || this.amount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.amount + ") on element of BufferInformation.amount.");
        }
    }

}