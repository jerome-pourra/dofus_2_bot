import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayPlayerFightFriendlyAnsweredMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1668;

	public fightId: number = 0;
	public sourceId: number = 0;
	public targetId: number = 0;
	public accept: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayPlayerFightFriendlyAnsweredMessage.protocolId;
    }

    public initGameRolePlayPlayerFightFriendlyAnsweredMessage(fightId: number = 0, sourceId: number = 0, targetId: number = 0, accept: boolean = false): GameRolePlayPlayerFightFriendlyAnsweredMessage
    {
        this.fightId = fightId;
        this.sourceId = sourceId;
        this.targetId = targetId;
        this.accept = accept;
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
        this.serializeAs_GameRolePlayPlayerFightFriendlyAnsweredMessage(output);
    }

    public serializeAs_GameRolePlayPlayerFightFriendlyAnsweredMessage(output: ICustomDataOutput)
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
        output.writeBoolean(this.accept);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayPlayerFightFriendlyAnsweredMessage(input);
    }

    private deserializeAs_GameRolePlayPlayerFightFriendlyAnsweredMessage(input: ICustomDataInput)
    {
        this._fightIdFunc(input);
        this._sourceIdFunc(input);
        this._targetIdFunc(input);
        this._acceptFunc(input);
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of GameRolePlayPlayerFightFriendlyAnsweredMessage.fightId.");
        }
    }

    private _sourceIdFunc(input: ICustomDataInput)
    {
        this.sourceId = input.readVarUhLong();
        if(this.sourceId < 0 || this.sourceId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sourceId + ") on element of GameRolePlayPlayerFightFriendlyAnsweredMessage.sourceId.");
        }
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readVarUhLong();
        if(this.targetId < 0 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameRolePlayPlayerFightFriendlyAnsweredMessage.targetId.");
        }
    }

    private _acceptFunc(input: ICustomDataInput)
    {
        this.accept = input.readBoolean();
    }

}