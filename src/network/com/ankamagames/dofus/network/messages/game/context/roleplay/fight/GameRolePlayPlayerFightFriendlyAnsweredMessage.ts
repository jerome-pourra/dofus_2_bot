import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayPlayerFightFriendlyAnsweredMessage extends NetworkMessage
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

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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