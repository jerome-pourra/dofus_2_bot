import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayMonsterNotAngryAtPlayerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5585;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public playerId: number = 0;
	public monsterGroupId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayMonsterNotAngryAtPlayerMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayMonsterNotAngryAtPlayerMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayMonsterNotAngryAtPlayerMessage.endpointServer;
    }

    public initGameRolePlayMonsterNotAngryAtPlayerMessage(playerId: number = 0, monsterGroupId: number = 0): GameRolePlayMonsterNotAngryAtPlayerMessage
    {
        this.playerId = playerId;
        this.monsterGroupId = monsterGroupId;
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
        this.serializeAs_GameRolePlayMonsterNotAngryAtPlayerMessage(output);
    }

    public serializeAs_GameRolePlayMonsterNotAngryAtPlayerMessage(output: ICustomDataOutput)
    {
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
        if(this.monsterGroupId < -9007199254740992 || this.monsterGroupId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.monsterGroupId + ") on element monsterGroupId.");
        }
        output.writeDouble(this.monsterGroupId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayMonsterNotAngryAtPlayerMessage(input);
    }

    private deserializeAs_GameRolePlayMonsterNotAngryAtPlayerMessage(input: ICustomDataInput)
    {
        this._playerIdFunc(input);
        this._monsterGroupIdFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of GameRolePlayMonsterNotAngryAtPlayerMessage.playerId.");
        }
    }

    private _monsterGroupIdFunc(input: ICustomDataInput)
    {
        this.monsterGroupId = input.readDouble();
        if(this.monsterGroupId < -9007199254740992 || this.monsterGroupId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.monsterGroupId + ") on element of GameRolePlayMonsterNotAngryAtPlayerMessage.monsterGroupId.");
        }
    }

}