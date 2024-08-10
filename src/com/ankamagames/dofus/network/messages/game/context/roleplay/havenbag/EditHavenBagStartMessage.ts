import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class EditHavenBagStartMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9417;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return EditHavenBagStartMessage.protocolId;
    }

    public isEndpointClient()
    {
        return EditHavenBagStartMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return EditHavenBagStartMessage.endpointServer;
    }

    public initEditHavenBagStartMessage(): EditHavenBagStartMessage
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
        this.serializeAs_EditHavenBagStartMessage(output);
    }

    public serializeAs_EditHavenBagStartMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EditHavenBagStartMessage(input);
    }

    private deserializeAs_EditHavenBagStartMessage(input: ICustomDataInput)
    {

    }

}