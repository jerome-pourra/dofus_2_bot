import { CharacterBaseInformations } from "./../../../../types/game/character/choice/CharacterBaseInformations";
import { CharacterToRemodelInformations } from "./../../../../types/game/character/choice/CharacterToRemodelInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { CharactersListMessage } from "./CharactersListMessage";

export class CharactersListWithRemodelingMessage extends CharactersListMessage
{

	public static readonly protocolId: number = 9633;

	public charactersToRemodel: Array<CharacterToRemodelInformations>;

    public constructor()
    {
        super();
        this.charactersToRemodel = Array<CharacterToRemodelInformations>();
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
        this.deserializeAs_CharactersListWithRemodelingMessage(input);
    }

    private deserializeAs_CharactersListWithRemodelingMessage(input: ICustomDataInput)
    {
        let _item1: CharacterToRemodelInformations;
        super.deserialize(input);
        let _charactersToRemodelLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _charactersToRemodelLen; _i1++)
        {
            _item1 = new CharacterToRemodelInformations();
            _item1.deserialize(input);
            this.charactersToRemodel.push(_item1);
        }
    }

}