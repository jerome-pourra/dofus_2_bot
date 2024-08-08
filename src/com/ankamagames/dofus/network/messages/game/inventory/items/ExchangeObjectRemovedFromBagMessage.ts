import { ExchangeObjectMessage } from "./../exchanges/ExchangeObjectMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class ExchangeObjectRemovedFromBagMessage extends ExchangeObjectMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5602;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public objectUID: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeObjectRemovedFromBagMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeObjectRemovedFromBagMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeObjectRemovedFromBagMessage.endpointServer;
    }

    public initExchangeObjectRemovedFromBagMessage(remote: boolean = false, objectUID: number = 0): ExchangeObjectRemovedFromBagMessage
    {
        super.initExchangeObjectMessage(remote);
        this.objectUID = objectUID;
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
        this.serializeAs_ExchangeObjectRemovedFromBagMessage(output);
    }

    public serializeAs_ExchangeObjectRemovedFromBagMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeObjectMessage(output);
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
        }
        output.writeVarInt(this.objectUID);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeObjectRemovedFromBagMessage(input);
    }

    private deserializeAs_ExchangeObjectRemovedFromBagMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._objectUIDFunc(input);
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of ExchangeObjectRemovedFromBagMessage.objectUID.");
        }
    }

}