import { CharacterBaseInformations } from "./../../../../types/game/character/choice/CharacterBaseInformations";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharactersListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8016;

	public characters: Array<CharacterBaseInformations>;

    public constructor()
    {
        super();
        this.characters = Array<CharacterBaseInformations>();
    }

    public getMessageId()
    {
        return CharactersListMessage.protocolId;
    }

    public initCharactersListMessage(characters: Array<CharacterBaseInformations> = null): CharactersListMessage
    {
        this.characters = characters;
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
        this.serializeAs_CharactersListMessage(output);
    }

    public serializeAs_CharactersListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.characters.length);
        for(var _i1: number = 0; _i1 < this.characters.length; _i1++)
        {
            output.writeShort((this.characters[_i1] as CharacterBaseInformations).getTypeId());
            (this.characters[_i1] as CharacterBaseInformations).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharactersListMessage(input);
    }

    private deserializeAs_CharactersListMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: CharacterBaseInformations;
        let _charactersLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _charactersLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(CharacterBaseInformations,_id1);
            _item1.deserialize(input);
            this.characters.push(_item1);
        }
    }

}