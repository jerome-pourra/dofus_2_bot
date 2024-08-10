import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterCanBeCreatedRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4275;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterCanBeCreatedRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CharacterCanBeCreatedRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CharacterCanBeCreatedRequestMessage.endpointServer;
    }

    public initCharacterCanBeCreatedRequestMessage(): CharacterCanBeCreatedRequestMessage
    {
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
        this.serializeAs_CharacterCanBeCreatedRequestMessage(output);
    }

    public serializeAs_CharacterCanBeCreatedRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterCanBeCreatedRequestMessage(input);
    }

    private deserializeAs_CharacterCanBeCreatedRequestMessage(input: ICustomDataInput)
    {

    }

}