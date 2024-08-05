import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterDeletionPrepareMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5348;

	public characterId: number = 0;
	public characterName: string = "";
	public secretQuestion: string = "";
	public needSecretAnswer: boolean = false;

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
        this.deserializeAs_CharacterDeletionPrepareMessage(input);
    }

    private deserializeAs_CharacterDeletionPrepareMessage(input: ICustomDataInput)
    {
        this._characterIdFunc(input);
        this._characterNameFunc(input);
        this._secretQuestionFunc(input);
        this._needSecretAnswerFunc(input);
    }

    private _characterIdFunc(input: ICustomDataInput)
    {
        this.characterId = input.readVarUhLong();
        if(this.characterId < 0 || this.characterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.characterId + ") on element of CharacterDeletionPrepareMessage.characterId.");
        }
    }

    private _characterNameFunc(input: ICustomDataInput)
    {
        this.characterName = input.readUTF();
    }

    private _secretQuestionFunc(input: ICustomDataInput)
    {
        this.secretQuestion = input.readUTF();
    }

    private _needSecretAnswerFunc(input: ICustomDataInput)
    {
        this.needSecretAnswer = input.readBoolean();
    }

}