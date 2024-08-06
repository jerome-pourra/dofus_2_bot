import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayPlayerFightFriendlyAnswerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1704;

	public fightId: number = 0;
	public accept: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayPlayerFightFriendlyAnswerMessage.protocolId;
    }

    public initGameRolePlayPlayerFightFriendlyAnswerMessage(fightId: number = 0, accept: boolean = false): GameRolePlayPlayerFightFriendlyAnswerMessage
    {
        this.fightId = fightId;
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
        this.serializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage(output);
    }

    public serializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage(output: ICustomDataOutput)
    {
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
        }
        output.writeVarShort(this.fightId);
        output.writeBoolean(this.accept);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage(input);
    }

    private deserializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage(input: ICustomDataInput)
    {
        this._fightIdFunc(input);
        this._acceptFunc(input);
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of GameRolePlayPlayerFightFriendlyAnswerMessage.fightId.");
        }
    }

    private _acceptFunc(input: ICustomDataInput)
    {
        this.accept = input.readBoolean();
    }

}