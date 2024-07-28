import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SurrenderVoteStartMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6177;

	public alreadyCastedVote: boolean = false;
	public numberOfParticipants: number = 0;
	public castedVoteNumber: number = 0;
	public voteDuration: number = 0;

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
        this.deserializeAs_SurrenderVoteStartMessage(input);
    }

    private deserializeAs_SurrenderVoteStartMessage(input: ICustomDataInput)
    {
        this._alreadyCastedVoteFunc(input);
        this._numberOfParticipantsFunc(input);
        this._castedVoteNumberFunc(input);
        this._voteDurationFunc(input);
    }

    private _alreadyCastedVoteFunc(input: ICustomDataInput)
    {
        this.alreadyCastedVote = input.readBoolean();
    }

    private _numberOfParticipantsFunc(input: ICustomDataInput)
    {
        this.numberOfParticipants = input.readInt();
    }

    private _castedVoteNumberFunc(input: ICustomDataInput)
    {
        this.castedVoteNumber = input.readInt();
    }

    private _voteDurationFunc(input: ICustomDataInput)
    {
        this.voteDuration = input.readInt();
    }

}