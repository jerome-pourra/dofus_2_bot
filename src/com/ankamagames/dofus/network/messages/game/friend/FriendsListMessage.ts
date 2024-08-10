import { FriendInformations } from "./../../../types/game/friend/FriendInformations";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendsListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4172;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public friendsList: Array<FriendInformations>;

    public constructor()
    {
        super();
        this.friendsList = Array<FriendInformations>();
    }

    public getMessageId()
    {
        return FriendsListMessage.protocolId;
    }

    public isEndpointClient()
    {
        return FriendsListMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return FriendsListMessage.endpointServer;
    }

    public initFriendsListMessage(friendsList: Array<FriendInformations> = null): FriendsListMessage
    {
        this.friendsList = friendsList;
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
        this.serializeAs_FriendsListMessage(output);
    }

    public serializeAs_FriendsListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.friendsList.length);
        for(var _i1: number = 0; _i1 < this.friendsList.length; _i1++)
        {
            output.writeShort((this.friendsList[_i1] as FriendInformations).getTypeId());
            (this.friendsList[_i1] as FriendInformations).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FriendsListMessage(input);
    }

    private deserializeAs_FriendsListMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: FriendInformations;
        let _friendsListLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _friendsListLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(FriendInformations,_id1);
            _item1.deserialize(input);
            this.friendsList.push(_item1);
        }
    }

}