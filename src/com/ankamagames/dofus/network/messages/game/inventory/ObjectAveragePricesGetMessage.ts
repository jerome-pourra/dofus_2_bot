import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ObjectAveragePricesGetMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2730;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ObjectAveragePricesGetMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectAveragePricesGetMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectAveragePricesGetMessage.endpointServer;
    }

    public initObjectAveragePricesGetMessage(): ObjectAveragePricesGetMessage
    {
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
        this.serializeAs_ObjectAveragePricesGetMessage(output);
    }

    public serializeAs_ObjectAveragePricesGetMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectAveragePricesGetMessage(input);
    }

    private deserializeAs_ObjectAveragePricesGetMessage(input: ICustomDataInput)
    {

    }

}