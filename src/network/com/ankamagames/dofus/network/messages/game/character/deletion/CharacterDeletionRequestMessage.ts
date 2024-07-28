import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterDeletionRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1489;

	public characterId: number = 0;
	public secretAnswerHash: string = "";

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