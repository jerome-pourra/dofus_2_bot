import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterSelectedErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1596;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterSelectedErrorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CharacterSelectedErrorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CharacterSelectedErrorMessage.endpointServer;
    }

    public initCharacterSelectedErrorMessage(): CharacterSelectedErrorMessage
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
        this.serializeAs_CharacterSelectedErrorMessage(output);
    }

    public serializeAs_CharacterSelectedErrorMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterSelectedErrorMessage(input);
    }

    private deserializeAs_CharacterSelectedErrorMessage(input: ICustomDataInput)
    {

    }

}