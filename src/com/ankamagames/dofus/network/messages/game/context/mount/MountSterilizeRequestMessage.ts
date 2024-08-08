import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountSterilizeRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 658;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountSterilizeRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MountSterilizeRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MountSterilizeRequestMessage.endpointServer;
    }

    public initMountSterilizeRequestMessage(): MountSterilizeRequestMessage
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
        this.serializeAs_MountSterilizeRequestMessage(output);
    }

    public serializeAs_MountSterilizeRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountSterilizeRequestMessage(input);
    }

    private deserializeAs_MountSterilizeRequestMessage(input: ICustomDataInput)
    {

    }

}