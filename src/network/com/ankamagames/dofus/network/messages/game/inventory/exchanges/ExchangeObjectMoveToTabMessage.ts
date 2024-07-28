import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeObjectMoveToTabMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1002;

	public objectUID: number = 0;
	public quantity: number = 0;
	public tabNumber: number = 0;

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
        this.deserializeAs_ExchangeObjectMoveToTabMessage(input);
    }

    private deserializeAs_ExchangeObjectMoveToTabMessage(input: ICustomDataInput)
    {
        this._objectUIDFunc(input);
        this._quantityFunc(input);
        this._tabNumberFunc(input);
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of ExchangeObjectMoveToTabMessage.objectUID.");
        }
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarInt();
    }

    private _tabNumberFunc(input: ICustomDataInput)
    {
        this.tabNumber = input.readVarUhInt();
        if(this.tabNumber < 0)
        {
            throw new Error("Forbidden value (" + this.tabNumber + ") on element of ExchangeObjectMoveToTabMessage.tabNumber.");
        }
    }

}