import { AbstractPlayerSearchInformation } from "./../../../types/common/AbstractPlayerSearchInformation";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendJoinRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5530;

	public target: AbstractPlayerSearchInformation;

    public constructor()
    {
        super();
        this.target = new AbstractPlayerSearchInformation();
    }

    public getMessageId()
    {
        return FriendJoinRequestMessage.protocolId;
    }

    public initFriendJoinRequestMessage(target: AbstractPlayerSearchInformation = null): FriendJoinRequestMessage
    {
        this.target = target;
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
        this.serializeAs_FriendJoinRequestMessage(output);
    }

    public serializeAs_FriendJoinRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.target.getTypeId());
        this.target.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FriendJoinRequestMessage(input);
    }

    private deserializeAs_FriendJoinRequestMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.target = ProtocolTypeManager.getInstance(AbstractPlayerSearchInformation,_id1);
        this.target.deserialize(input);
    }

}