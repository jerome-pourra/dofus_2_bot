import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayFightRequestCanceledMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5826;

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
        return GameRolePlayFightRequestCanceledMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayFightRequestCanceledMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayFightRequestCanceledMessage.endpointServer;
    }

    public initGameRolePlayFightRequestCanceledMessage(fightId: number = 0, sourceId: number = 0, targetId: number = 0): GameRolePlayFightRequestCanceledMessage
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
        this.serializeAs_GameRolePlayFightRequestCanceledMessage(output);
    }

    public serializeAs_GameRolePlayFightRequestCanceledMessage(output: ICustomDataOutput)
    {
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
        }
        output.writeVarShort(this.fightId);
        if(this.sourceId < -9007199254740992 || this.sourceId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sourceId + ") on element sourceId.");
        }
        output.writeDouble(this.sourceId);
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayFightRequestCanceledMessage(input);
    }

    private deserializeAs_GameRolePlayFightRequestCanceledMessage(input: ICustomDataInput)
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
            throw new Error("Forbidden value (" + this.fightId + ") on element of GameRolePlayFightRequestCanceledMessage.fightId.");
        }
    }

    private _sourceIdFunc(input: ICustomDataInput)
    {
        this.sourceId = input.readDouble();
        if(this.sourceId < -9007199254740992 || this.sourceId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sourceId + ") on element of GameRolePlayFightRequestCanceledMessage.sourceId.");
        }
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameRolePlayFightRequestCanceledMessage.targetId.");
        }
    }

}