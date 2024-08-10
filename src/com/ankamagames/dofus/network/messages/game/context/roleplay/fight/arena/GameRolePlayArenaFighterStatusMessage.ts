import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayArenaFighterStatusMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3114;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public fightId: number = 0;
	public playerId: number = 0;
	public accepted: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayArenaFighterStatusMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayArenaFighterStatusMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayArenaFighterStatusMessage.endpointServer;
    }

    public initGameRolePlayArenaFighterStatusMessage(fightId: number = 0, playerId: number = 0, accepted: boolean = false): GameRolePlayArenaFighterStatusMessage
    {
        this.fightId = fightId;
        this.playerId = playerId;
        this.accepted = accepted;
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
        this.serializeAs_GameRolePlayArenaFighterStatusMessage(output);
    }

    public serializeAs_GameRolePlayArenaFighterStatusMessage(output: ICustomDataOutput)
    {
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
        }
        output.writeVarShort(this.fightId);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
        output.writeBoolean(this.accepted);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayArenaFighterStatusMessage(input);
    }

    private deserializeAs_GameRolePlayArenaFighterStatusMessage(input: ICustomDataInput)
    {
        this._fightIdFunc(input);
        this._playerIdFunc(input);
        this._acceptedFunc(input);
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of GameRolePlayArenaFighterStatusMessage.fightId.");
        }
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of GameRolePlayArenaFighterStatusMessage.playerId.");
        }
    }

    private _acceptedFunc(input: ICustomDataInput)
    {
        this.accepted = input.readBoolean();
    }

}