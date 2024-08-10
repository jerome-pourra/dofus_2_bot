import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildApplicationAnswerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3927;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public accepted: boolean = false;
	public playerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildApplicationAnswerMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildApplicationAnswerMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildApplicationAnswerMessage.endpointServer;
    }

    public initGuildApplicationAnswerMessage(accepted: boolean = false, playerId: number = 0): GuildApplicationAnswerMessage
    {
        this.accepted = accepted;
        this.playerId = playerId;
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
        this.serializeAs_GuildApplicationAnswerMessage(output);
    }

    public serializeAs_GuildApplicationAnswerMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.accepted);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildApplicationAnswerMessage(input);
    }

    private deserializeAs_GuildApplicationAnswerMessage(input: ICustomDataInput)
    {
        this._acceptedFunc(input);
        this._playerIdFunc(input);
    }

    private _acceptedFunc(input: ICustomDataInput)
    {
        this.accepted = input.readBoolean();
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of GuildApplicationAnswerMessage.playerId.");
        }
    }

}