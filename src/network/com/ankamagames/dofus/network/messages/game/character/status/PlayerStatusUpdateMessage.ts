import { PlayerStatus } from "./../../../../types/game/character/status/PlayerStatus";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class PlayerStatusUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3675;

	public accountId: number = 0;
	public playerId: number = 0;
	public status: PlayerStatus;

    public constructor()
    {
        super();
        this.status = new PlayerStatus();
    }

    public getMessageId()
    {
        return PlayerStatusUpdateMessage.protocolId;
    }

    public initPlayerStatusUpdateMessage(accountId: number = 0, playerId: number = 0, status: PlayerStatus = null): PlayerStatusUpdateMessage
    {
        this.accountId = accountId;
        this.playerId = playerId;
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
        this.serializeAs_PlayerStatusUpdateMessage(output);
    }

    public serializeAs_PlayerStatusUpdateMessage(output: ICustomDataOutput)
    {
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
        }
        output.writeInt(this.accountId);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
        output.writeShort(this.status.getTypeId());
        this.status.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PlayerStatusUpdateMessage(input);
    }

    private deserializeAs_PlayerStatusUpdateMessage(input: ICustomDataInput)
    {
        this._accountIdFunc(input);
        this._playerIdFunc(input);
        let _id3: number = input.readUnsignedShort();
        this.status = ProtocolTypeManager.getInstance(PlayerStatus,_id3);
        this.status.deserialize(input);
    }

    private _accountIdFunc(input: ICustomDataInput)
    {
        this.accountId = input.readInt();
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element of PlayerStatusUpdateMessage.accountId.");
        }
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of PlayerStatusUpdateMessage.playerId.");
        }
    }

}