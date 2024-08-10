import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayMonsterAngryAtPlayerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9879;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public playerId: number = 0;
	public monsterGroupId: number = 0;
	public angryStartTime: number = 0;
	public attackTime: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayMonsterAngryAtPlayerMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayMonsterAngryAtPlayerMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayMonsterAngryAtPlayerMessage.endpointServer;
    }

    public initGameRolePlayMonsterAngryAtPlayerMessage(playerId: number = 0, monsterGroupId: number = 0, angryStartTime: number = 0, attackTime: number = 0): GameRolePlayMonsterAngryAtPlayerMessage
    {
        this.playerId = playerId;
        this.monsterGroupId = monsterGroupId;
        this.angryStartTime = angryStartTime;
        this.attackTime = attackTime;
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
        this.serializeAs_GameRolePlayMonsterAngryAtPlayerMessage(output);
    }

    public serializeAs_GameRolePlayMonsterAngryAtPlayerMessage(output: ICustomDataOutput)
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
        if(this.angryStartTime < 0 || this.angryStartTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.angryStartTime + ") on element angryStartTime.");
        }
        output.writeDouble(this.angryStartTime);
        if(this.attackTime < 0 || this.attackTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.attackTime + ") on element attackTime.");
        }
        output.writeDouble(this.attackTime);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayMonsterAngryAtPlayerMessage(input);
    }

    private deserializeAs_GameRolePlayMonsterAngryAtPlayerMessage(input: ICustomDataInput)
    {
        this._playerIdFunc(input);
        this._monsterGroupIdFunc(input);
        this._angryStartTimeFunc(input);
        this._attackTimeFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of GameRolePlayMonsterAngryAtPlayerMessage.playerId.");
        }
    }

    private _monsterGroupIdFunc(input: ICustomDataInput)
    {
        this.monsterGroupId = input.readDouble();
        if(this.monsterGroupId < -9007199254740992 || this.monsterGroupId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.monsterGroupId + ") on element of GameRolePlayMonsterAngryAtPlayerMessage.monsterGroupId.");
        }
    }

    private _angryStartTimeFunc(input: ICustomDataInput)
    {
        this.angryStartTime = input.readDouble();
        if(this.angryStartTime < 0 || this.angryStartTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.angryStartTime + ") on element of GameRolePlayMonsterAngryAtPlayerMessage.angryStartTime.");
        }
    }

    private _attackTimeFunc(input: ICustomDataInput)
    {
        this.attackTime = input.readDouble();
        if(this.attackTime < 0 || this.attackTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.attackTime + ") on element of GameRolePlayMonsterAngryAtPlayerMessage.attackTime.");
        }
    }

}