import { PlayerStatus } from "./../../../../types/game/character/status/PlayerStatus";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class PlayerStatusUpdateRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4213;

	public status: PlayerStatus;

    public constructor()
    {
        super();
        this.status = new PlayerStatus();
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
        this.deserializeAs_PlayerStatusUpdateRequestMessage(input);
    }

    private deserializeAs_PlayerStatusUpdateRequestMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.status = ProtocolTypeManager.getInstance(PlayerStatus,_id1);
        this.status.deserialize(input);
    }

}