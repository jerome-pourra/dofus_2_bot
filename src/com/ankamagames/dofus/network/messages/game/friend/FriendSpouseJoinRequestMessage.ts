import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendSpouseJoinRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2260;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return FriendSpouseJoinRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return FriendSpouseJoinRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return FriendSpouseJoinRequestMessage.endpointServer;
    }

    public initFriendSpouseJoinRequestMessage(): FriendSpouseJoinRequestMessage
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
        this.serializeAs_FriendSpouseJoinRequestMessage(output);
    }

    public serializeAs_FriendSpouseJoinRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FriendSpouseJoinRequestMessage(input);
    }

    private deserializeAs_FriendSpouseJoinRequestMessage(input: ICustomDataInput)
    {

    }

}