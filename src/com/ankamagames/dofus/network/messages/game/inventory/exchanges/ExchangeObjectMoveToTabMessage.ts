import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeObjectMoveToTabMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1002;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public objectUID: number = 0;
	public quantity: number = 0;
	public tabNumber: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeObjectMoveToTabMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeObjectMoveToTabMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeObjectMoveToTabMessage.endpointServer;
    }

    public initExchangeObjectMoveToTabMessage(objectUID: number = 0, quantity: number = 0, tabNumber: number = 0): ExchangeObjectMoveToTabMessage
    {
        this.objectUID = objectUID;
        this.quantity = quantity;
        this.tabNumber = tabNumber;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangeObjectMoveToTabMessage(output);
    }

    public serializeAs_ExchangeObjectMoveToTabMessage(output: ICustomDataOutput)
    {
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
        }
        output.writeVarInt(this.objectUID);
        output.writeVarInt(this.quantity);
        if(this.tabNumber < 0)
        {
            throw new Error("Forbidden value (" + this.tabNumber + ") on element tabNumber.");
        }
        output.writeVarInt(this.tabNumber);
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