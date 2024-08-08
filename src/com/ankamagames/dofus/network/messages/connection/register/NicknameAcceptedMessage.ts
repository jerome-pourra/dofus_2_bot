import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class NicknameAcceptedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8083;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return NicknameAcceptedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return NicknameAcceptedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return NicknameAcceptedMessage.endpointServer;
    }

    public initNicknameAcceptedMessage(): NicknameAcceptedMessage
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
        this.serializeAs_NicknameAcceptedMessage(output);
    }

    public serializeAs_NicknameAcceptedMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NicknameAcceptedMessage(input);
    }

    private deserializeAs_NicknameAcceptedMessage(input: ICustomDataInput)
    {

    }

}