import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountReleaseRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1227;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountReleaseRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MountReleaseRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MountReleaseRequestMessage.endpointServer;
    }

    public initMountReleaseRequestMessage(): MountReleaseRequestMessage
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
        this.serializeAs_MountReleaseRequestMessage(output);
    }

    public serializeAs_MountReleaseRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountReleaseRequestMessage(input);
    }

    private deserializeAs_MountReleaseRequestMessage(input: ICustomDataInput)
    {

    }

}