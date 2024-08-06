import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterNameSuggestionSuccessMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2208;

	public suggestion: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterNameSuggestionSuccessMessage.protocolId;
    }

    public initCharacterNameSuggestionSuccessMessage(suggestion: string = ""): CharacterNameSuggestionSuccessMessage
    {
        this.suggestion = suggestion;
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
        this.serializeAs_CharacterNameSuggestionSuccessMessage(output);
    }

    public serializeAs_CharacterNameSuggestionSuccessMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.suggestion);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterNameSuggestionSuccessMessage(input);
    }

    private deserializeAs_CharacterNameSuggestionSuccessMessage(input: ICustomDataInput)
    {
        this._suggestionFunc(input);
    }

    private _suggestionFunc(input: ICustomDataInput)
    {
        this.suggestion = input.readUTF();
    }

}