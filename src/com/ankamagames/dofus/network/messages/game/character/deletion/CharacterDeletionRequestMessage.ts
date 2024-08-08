import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterDeletionRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1489;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public characterId: number = 0;
	public secretAnswerHash: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterDeletionRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CharacterDeletionRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CharacterDeletionRequestMessage.endpointServer;
    }

    public initCharacterDeletionRequestMessage(characterId: number = 0, secretAnswerHash: string = ""): CharacterDeletionRequestMessage
    {
        this.characterId = characterId;
        this.secretAnswerHash = secretAnswerHash;
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
        this.serializeAs_CharacterDeletionRequestMessage(output);
    }

    public serializeAs_CharacterDeletionRequestMessage(output: ICustomDataOutput)
    {
        if(this.characterId < 0 || this.characterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.characterId + ") on element characterId.");
        }
        output.writeVarLong(this.characterId);
        output.writeUTF(this.secretAnswerHash);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterDeletionRequestMessage(input);
    }

    private deserializeAs_CharacterDeletionRequestMessage(input: ICustomDataInput)
    {
        this._characterIdFunc(input);
        this._secretAnswerHashFunc(input);
    }

    private _characterIdFunc(input: ICustomDataInput)
    {
        this.characterId = input.readVarUhLong();
        if(this.characterId < 0 || this.characterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.characterId + ") on element of CharacterDeletionRequestMessage.characterId.");
        }
    }

    private _secretAnswerHashFunc(input: ICustomDataInput)
    {
        this.secretAnswerHash = input.readUTF();
    }

}