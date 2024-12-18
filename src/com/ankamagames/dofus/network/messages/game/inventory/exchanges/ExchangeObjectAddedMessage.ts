import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeObjectMessage } from "./ExchangeObjectMessage";

export class ExchangeObjectAddedMessage extends ExchangeObjectMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8426;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public object: ObjectItem;

    public constructor()
    {
        super();
        this.object = new ObjectItem();
    }

    public getMessageId()
    {
        return ExchangeObjectAddedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeObjectAddedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeObjectAddedMessage.endpointServer;
    }

    public initExchangeObjectAddedMessage(remote: boolean = false, object: ObjectItem = null): ExchangeObjectAddedMessage
    {
        super.initExchangeObjectMessage(remote);
        this.object = object;
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
        this.serializeAs_ExchangeObjectAddedMessage(output);
    }

    public serializeAs_ExchangeObjectAddedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeObjectMessage(output);
        this.object.serializeAs_ObjectItem(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeObjectAddedMessage(input);
    }

    private deserializeAs_ExchangeObjectAddedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.object = new ObjectItem();
        this.object.deserialize(input);
    }

}