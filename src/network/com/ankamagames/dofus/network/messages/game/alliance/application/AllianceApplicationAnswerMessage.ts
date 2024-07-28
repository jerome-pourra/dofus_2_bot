import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceApplicationAnswerMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9692;

	public accepted: boolean = false;
	public playerId: number = 0;

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
        this.deserializeAs_AllianceApplicationAnswerMessage(input);
    }

    private deserializeAs_AllianceApplicationAnswerMessage(input: ICustomDataInput)
    {
        this._acceptedFunc(input);
        this._playerIdFunc(input);
    }

    private _acceptedFunc(input: ICustomDataInput)
    {
        this.accepted = input.readBoolean();
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of AllianceApplicationAnswerMessage.playerId.");
        }
    }

}