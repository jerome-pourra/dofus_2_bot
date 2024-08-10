import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class RecycledItem implements INetworkType
{

	public static readonly protocolId: number = 2736;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public id: number = 0;
	public qty: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return RecycledItem.protocolId;
    }

    public isEndpointClient()
    {
        return RecycledItem.endpointClient;
    }

    public isEndpointServer()
    {
        return RecycledItem.endpointServer;
    }

    public initRecycledItem(id: number = 0, qty: number = 0): RecycledItem
    {
        this.id = id;
        this.qty = qty;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_RecycledItem(output);
    }

    public serializeAs_RecycledItem(output: ICustomDataOutput)
    {
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarInt(this.id);
        if(this.qty < 0 || this.qty > 4294967295)
        {
            throw new Error("Forbidden value (" + this.qty + ") on element qty.");
        }
        output.writeUnsignedInt(this.qty);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_RecycledItem(input);
    }

    private deserializeAs_RecycledItem(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._qtyFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhInt();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of RecycledItem.id.");
        }
    }

    private _qtyFunc(input: ICustomDataInput)
    {
        this.qty = input.readUnsignedInt();
        if(this.qty < 0 || this.qty > 4294967295)
        {
            throw new Error("Forbidden value (" + this.qty + ") on element of RecycledItem.qty.");
        }
    }

}