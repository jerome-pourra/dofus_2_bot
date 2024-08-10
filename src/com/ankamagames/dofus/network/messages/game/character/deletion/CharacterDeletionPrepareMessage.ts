import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterDeletionPrepareMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5348;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public characterId: number = 0;
	public characterName: string = "";
	public secretQuestion: string = "";
	public needSecretAnswer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterDeletionPrepareMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CharacterDeletionPrepareMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CharacterDeletionPrepareMessage.endpointServer;
    }

    public initCharacterDeletionPrepareMessage(characterId: number = 0, characterName: string = "", secretQuestion: string = "", needSecretAnswer: boolean = false): CharacterDeletionPrepareMessage
    {
        this.characterId = characterId;
        this.characterName = characterName;
        this.secretQuestion = secretQuestion;
        this.needSecretAnswer = needSecretAnswer;
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
        this.serializeAs_CharacterDeletionPrepareMessage(output);
    }

    public serializeAs_CharacterDeletionPrepareMessage(output: ICustomDataOutput)
    {
        if(this.characterId < 0 || this.characterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.characterId + ") on element characterId.");
        }
        output.writeVarLong(this.characterId);
        output.writeUTF(this.characterName);
        output.writeUTF(this.secretQuestion);
        output.writeBoolean(this.needSecretAnswer);
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