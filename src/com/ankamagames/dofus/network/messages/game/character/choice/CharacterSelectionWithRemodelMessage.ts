import { RemodelingInformation } from "./../../../../types/game/character/choice/RemodelingInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { CharacterSelectionMessage } from "./CharacterSelectionMessage";

export class CharacterSelectionWithRemodelMessage extends CharacterSelectionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3540;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public remodel: RemodelingInformation;

    public constructor()
    {
        super();
        this.remodel = new RemodelingInformation();
    }

    public getMessageId()
    {
        return CharacterSelectionWithRemodelMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CharacterSelectionWithRemodelMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CharacterSelectionWithRemodelMessage.endpointServer;
    }

    public initCharacterSelectionWithRemodelMessage(id: number = 0, remodel: RemodelingInformation = null): CharacterSelectionWithRemodelMessage
    {
        super.initCharacterSelectionMessage(id);
        this.remodel = remodel;
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
        this.serializeAs_CharacterSelectionWithRemodelMessage(output);
    }

    public serializeAs_CharacterSelectionWithRemodelMessage(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterSelectionMessage(output);
        this.remodel.serializeAs_RemodelingInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterSelectionWithRemodelMessage(input);
    }

    private deserializeAs_CharacterSelectionWithRemodelMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.remodel = new RemodelingInformation();
        this.remodel.deserialize(input);
    }

}