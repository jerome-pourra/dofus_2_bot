import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class EditHavenBagRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6707;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return EditHavenBagRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return EditHavenBagRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return EditHavenBagRequestMessage.endpointServer;
    }

    public initEditHavenBagRequestMessage(): EditHavenBagRequestMessage
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
        this.serializeAs_EditHavenBagRequestMessage(output);
    }

    public serializeAs_EditHavenBagRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EditHavenBagRequestMessage(input);
    }

    private deserializeAs_EditHavenBagRequestMessage(input: ICustomDataInput)
    {

    }

}