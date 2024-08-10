import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayPlayerFightFriendlyRequestedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4626;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public fightId: number = 0;
	public sourceId: number = 0;
	public targetId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayPlayerFightFriendlyRequestedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayPlayerFightFriendlyRequestedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayPlayerFightFriendlyRequestedMessage.endpointServer;
    }

    public initGameRolePlayPlayerFightFriendlyRequestedMessage(fightId: number = 0, sourceId: number = 0, targetId: number = 0): GameRolePlayPlayerFightFriendlyRequestedMessage
    {
        this.fightId = fightId;
        this.sourceId = sourceId;
        this.targetId = targetId;
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
        this.serializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage(output);
    }

    public serializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage(output: ICustomDataOutput)
    {
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
        }
        output.writeVarShort(this.fightId);
        if(this.sourceId < 0 || this.sourceId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sourceId + ") on element sourceId.");
        }
        output.writeVarLong(this.sourceId);
        if(this.targetId < 0 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeVarLong(this.targetId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage(input);
    }

    private deserializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage(input: ICustomDataInput)
    {
        this._fightIdFunc(input);
        this._sourceIdFunc(input);
        this._targetIdFunc(input);
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of GameRolePlayPlayerFightFriendlyRequestedMessage.fightId.");
        }
    }

    private _sourceIdFunc(input: ICustomDataInput)
    {
        this.sourceId = input.readVarUhLong();
        if(this.sourceId < 0 || this.sourceId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sourceId + ") on element of GameRolePlayPlayerFightFriendlyRequestedMessage.sourceId.");
        }
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readVarUhLong();
        if(this.targetId < 0 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameRolePlayPlayerFightFriendlyRequestedMessage.targetId.");
        }
    }

}