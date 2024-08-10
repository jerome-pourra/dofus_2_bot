import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayAggressionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6235;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public attackerId: number = 0;
	public defenderId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayAggressionMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayAggressionMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayAggressionMessage.endpointServer;
    }

    public initGameRolePlayAggressionMessage(attackerId: number = 0, defenderId: number = 0): GameRolePlayAggressionMessage
    {
        this.attackerId = attackerId;
        this.defenderId = defenderId;
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
        this.serializeAs_GameRolePlayAggressionMessage(output);
    }

    public serializeAs_GameRolePlayAggressionMessage(output: ICustomDataOutput)
    {
        if(this.attackerId < 0 || this.attackerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.attackerId + ") on element attackerId.");
        }
        output.writeVarLong(this.attackerId);
        if(this.defenderId < 0 || this.defenderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.defenderId + ") on element defenderId.");
        }
        output.writeVarLong(this.defenderId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayAggressionMessage(input);
    }

    private deserializeAs_GameRolePlayAggressionMessage(input: ICustomDataInput)
    {
        this._attackerIdFunc(input);
        this._defenderIdFunc(input);
    }

    private _attackerIdFunc(input: ICustomDataInput)
    {
        this.attackerId = input.readVarUhLong();
        if(this.attackerId < 0 || this.attackerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.attackerId + ") on element of GameRolePlayAggressionMessage.attackerId.");
        }
    }

    private _defenderIdFunc(input: ICustomDataInput)
    {
        this.defenderId = input.readVarUhLong();
        if(this.defenderId < 0 || this.defenderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.defenderId + ") on element of GameRolePlayAggressionMessage.defenderId.");
        }
    }

}