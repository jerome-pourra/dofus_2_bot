import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildApplicationReceivedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8148;

	public playerName: string = "";
	public playerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildApplicationReceivedMessage.protocolId;
    }

    public initGuildApplicationReceivedMessage(playerName: string = "", playerId: number = 0): GuildApplicationReceivedMessage
    {
        this.playerName = playerName;
        this.playerId = playerId;
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
        this.serializeAs_GuildApplicationReceivedMessage(output);
    }

    public serializeAs_GuildApplicationReceivedMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.playerName);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildApplicationReceivedMessage(input);
    }

    private deserializeAs_GuildApplicationReceivedMessage(input: ICustomDataInput)
    {
        this._playerNameFunc(input);
        this._playerIdFunc(input);
    }

    private _playerNameFunc(input: ICustomDataInput)
    {
        this.playerName = input.readUTF();
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of GuildApplicationReceivedMessage.playerId.");
        }
    }

}