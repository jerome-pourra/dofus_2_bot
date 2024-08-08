import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class CloseHavenBagFurnitureSequenceRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6165;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CloseHavenBagFurnitureSequenceRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CloseHavenBagFurnitureSequenceRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CloseHavenBagFurnitureSequenceRequestMessage.endpointServer;
    }

    public initCloseHavenBagFurnitureSequenceRequestMessage(): CloseHavenBagFurnitureSequenceRequestMessage
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
        this.serializeAs_CloseHavenBagFurnitureSequenceRequestMessage(output);
    }

    public serializeAs_CloseHavenBagFurnitureSequenceRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CloseHavenBagFurnitureSequenceRequestMessage(input);
    }

    private deserializeAs_CloseHavenBagFurnitureSequenceRequestMessage(input: ICustomDataInput)
    {

    }

}