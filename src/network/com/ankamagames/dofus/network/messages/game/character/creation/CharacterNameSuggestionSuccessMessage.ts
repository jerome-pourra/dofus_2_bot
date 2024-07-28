import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterNameSuggestionSuccessMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2208;

	public suggestion: string = "";

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