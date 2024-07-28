import { FriendInformations } from "./../../../types/game/friend/FriendInformations";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7293;

	public friendUpdated: FriendInformations;

    public constructor()
    {
        super();
        this.friendUpdated = new FriendInformations();
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
        this.deserializeAs_FriendUpdateMessage(input);
    }

    private deserializeAs_FriendUpdateMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.friendUpdated = ProtocolTypeManager.getInstance(FriendInformations,_id1);
        this.friendUpdated.deserialize(input);
    }

}