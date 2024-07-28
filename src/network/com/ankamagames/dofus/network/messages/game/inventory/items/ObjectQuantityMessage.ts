import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObjectQuantityMessage extends NetworkMessage
{

	public static readonly protocolId: number = 204;

	public objectUID: number = 0;
	public quantity: number = 0;
	public origin: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectQuantityMessage(input);
    }

    private deserializeAs_ObjectQuantityMessage(input: ICustomDataInput)
    {
        this._objectUIDFunc(input);
        this._quantityFunc(input);
        this._originFunc(input);
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectQuantityMessage.objectUID.");
        }
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarUhInt();
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectQuantityMessage.quantity.");
        }
    }

    private _originFunc(input: ICustomDataInput)
    {
        this.origin = input.readByte();
        if(this.origin < 0)
        {
            throw new Error("Forbidden value (" + this.origin + ") on element of ObjectQuantityMessage.origin.");
        }
    }

}