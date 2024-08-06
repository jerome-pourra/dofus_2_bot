import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterNameSuggestionRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2000;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterNameSuggestionRequestMessage.protocolId;
    }

    public initCharacterNameSuggestionRequestMessage(): CharacterNameSuggestionRequestMessage
    {
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
        this.serializeAs_CharacterNameSuggestionRequestMessage(output);
    }

    public serializeAs_CharacterNameSuggestionRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterNameSuggestionRequestMessage(input);
    }

    private deserializeAs_CharacterNameSuggestionRequestMessage(input: ICustomDataInput)
    {

    }

}