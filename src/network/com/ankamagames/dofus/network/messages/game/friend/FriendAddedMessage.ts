import { FriendInformations } from "./../../../types/game/friend/FriendInformations";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendAddedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3185;

	public friendAdded: FriendInformations;

    public constructor()
    {
        super();
        this.friendAdded = new FriendInformations();
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
        this.deserializeAs_FriendAddedMessage(input);
    }

    private deserializeAs_FriendAddedMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.friendAdded = ProtocolTypeManager.getInstance(FriendInformations,_id1);
        this.friendAdded.deserialize(input);
    }

}