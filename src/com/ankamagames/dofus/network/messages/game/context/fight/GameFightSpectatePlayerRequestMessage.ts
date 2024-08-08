import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightSpectatePlayerRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8994;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public playerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightSpectatePlayerRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightSpectatePlayerRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightSpectatePlayerRequestMessage.endpointServer;
    }

    public initGameFightSpectatePlayerRequestMessage(playerId: number = 0): GameFightSpectatePlayerRequestMessage
    {
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
        this.serializeAs_GameFightSpectatePlayerRequestMessage(output);
    }

    public serializeAs_GameFightSpectatePlayerRequestMessage(output: ICustomDataOutput)
    {
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightSpectatePlayerRequestMessage(input);
    }

    private deserializeAs_GameFightSpectatePlayerRequestMessage(input: ICustomDataInput)
    {
        this._playerIdFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of GameFightSpectatePlayerRequestMessage.playerId.");
        }
    }

}