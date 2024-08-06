import { PlayerStatus } from "./../../../../types/game/character/status/PlayerStatus";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class PlayerStatusUpdateRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4213;

	public status: PlayerStatus;

    public constructor()
    {
        super();
        this.status = new PlayerStatus();
    }

    public getMessageId()
    {
        return PlayerStatusUpdateRequestMessage.protocolId;
    }

    public initPlayerStatusUpdateRequestMessage(status: PlayerStatus = null): PlayerStatusUpdateRequestMessage
    {
        this.status = status;
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
        this.serializeAs_PlayerStatusUpdateRequestMessage(output);
    }

    public serializeAs_PlayerStatusUpdateRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.status.getTypeId());
        this.status.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PlayerStatusUpdateRequestMessage(input);
    }

    private deserializeAs_PlayerStatusUpdateRequestMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.status = ProtocolTypeManager.getInstance(PlayerStatus,_id1);
        this.status.deserialize(input);
    }

}