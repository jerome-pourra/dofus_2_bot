import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class EditHavenBagFinishedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2362;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return EditHavenBagFinishedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return EditHavenBagFinishedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return EditHavenBagFinishedMessage.endpointServer;
    }

    public initEditHavenBagFinishedMessage(): EditHavenBagFinishedMessage
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
        this.serializeAs_EditHavenBagFinishedMessage(output);
    }

    public serializeAs_EditHavenBagFinishedMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EditHavenBagFinishedMessage(input);
    }

    private deserializeAs_EditHavenBagFinishedMessage(input: ICustomDataInput)
    {

    }

}