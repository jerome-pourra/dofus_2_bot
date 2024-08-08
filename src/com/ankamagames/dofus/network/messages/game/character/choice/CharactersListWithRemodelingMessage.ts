import { CharacterBaseInformations } from "./../../../../types/game/character/choice/CharacterBaseInformations";
import { CharacterToRemodelInformations } from "./../../../../types/game/character/choice/CharacterToRemodelInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { CharactersListMessage } from "./CharactersListMessage";

export class CharactersListWithRemodelingMessage extends CharactersListMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9633;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public charactersToRemodel: Array<CharacterToRemodelInformations>;

    public constructor()
    {
        super();
        this.charactersToRemodel = Array<CharacterToRemodelInformations>();
    }

    public getMessageId()
    {
        return CharactersListWithRemodelingMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CharactersListWithRemodelingMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CharactersListWithRemodelingMessage.endpointServer;
    }

    public initCharactersListWithRemodelingMessage(characters: Array<CharacterBaseInformations> = null, charactersToRemodel: Array<CharacterToRemodelInformations> = null): CharactersListWithRemodelingMessage
    {
        super.initCharactersListMessage(characters);
        this.charactersToRemodel = charactersToRemodel;
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
        this.serializeAs_CharactersListWithRemodelingMessage(output);
    }

    public serializeAs_CharactersListWithRemodelingMessage(output: ICustomDataOutput)
    {
        super.serializeAs_CharactersListMessage(output);
        output.writeShort(this.charactersToRemodel.length);
        for(var _i1: number = 0; _i1 < this.charactersToRemodel.length; _i1++)
        {
            (this.charactersToRemodel[_i1] as CharacterToRemodelInformations).serializeAs_CharacterToRemodelInformations(output);
        }
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