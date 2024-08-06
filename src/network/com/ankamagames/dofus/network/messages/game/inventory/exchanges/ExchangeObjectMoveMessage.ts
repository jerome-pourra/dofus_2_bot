import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeObjectMoveMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5939;

	public objectUID: number = 0;
	public quantity: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeObjectMoveMessage.protocolId;
    }

    public initExchangeObjectMoveMessage(objectUID: number = 0, quantity: number = 0): ExchangeObjectMoveMessage
    {
        this.objectUID = objectUID;
        this.quantity = quantity;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangeObjectMoveMessage(output);
    }

    public serializeAs_ExchangeObjectMoveMessage(output: ICustomDataOutput)
    {
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
        }
        output.writeVarInt(this.objectUID);
        output.writeVarInt(this.quantity);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeObjectMoveMessage(input);
    }

    private deserializeAs_ExchangeObjectMoveMessage(input: ICustomDataInput)
    {
        this._objectUIDFunc(input);
        this._quantityFunc(input);
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of ExchangeObjectMoveMessage.objectUID.");
        }
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarInt();
    }

}