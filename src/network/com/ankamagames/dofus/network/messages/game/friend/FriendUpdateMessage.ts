import { FriendInformations } from "./../../../types/game/friend/FriendInformations";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7293;

	public friendUpdated: FriendInformations;

    public constructor()
    {
        super();
        this.friendUpdated = new FriendInformations();
    }

    public getMessageId()
    {
        return FriendUpdateMessage.protocolId;
    }

    public initFriendUpdateMessage(friendUpdated: FriendInformations = null): FriendUpdateMessage
    {
        this.friendUpdated = friendUpdated;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FriendUpdateMessage(output);
    }

    public serializeAs_FriendUpdateMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.friendUpdated.getTypeId());
        this.friendUpdated.serialize(output);
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