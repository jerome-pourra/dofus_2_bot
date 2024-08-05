import { FriendInformations } from "./../../../types/game/friend/FriendInformations";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendsListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4172;

	public friendsList: Array<FriendInformations>;

    public constructor()
    {
        super();
        this.friendsList = Array<FriendInformations>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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