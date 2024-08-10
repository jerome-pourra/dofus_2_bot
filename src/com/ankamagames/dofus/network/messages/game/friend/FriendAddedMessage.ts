import { FriendInformations } from "./../../../types/game/friend/FriendInformations";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendAddedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3185;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public friendAdded: FriendInformations;

    public constructor()
    {
        super();
        this.friendAdded = new FriendInformations();
    }

    public getMessageId()
    {
        return FriendAddedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return FriendAddedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return FriendAddedMessage.endpointServer;
    }

    public initFriendAddedMessage(friendAdded: FriendInformations = null): FriendAddedMessage
    {
        this.friendAdded = friendAdded;
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
        this.serializeAs_FriendAddedMessage(output);
    }

    public serializeAs_FriendAddedMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.friendAdded.getTypeId());
        this.friendAdded.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FriendAddedMessage(input);
    }

    private deserializeAs_FriendAddedMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.friendAdded = ProtocolTypeManager.getInstance(FriendInformations,_id1);
        this.friendAdded.deserialize(input);
    }

}