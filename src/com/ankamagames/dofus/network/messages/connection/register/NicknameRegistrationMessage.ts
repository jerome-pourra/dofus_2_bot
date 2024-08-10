import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class NicknameRegistrationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8872;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return NicknameRegistrationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return NicknameRegistrationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return NicknameRegistrationMessage.endpointServer;
    }

    public initNicknameRegistrationMessage(): NicknameRegistrationMessage
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
        this.serializeAs_NicknameRegistrationMessage(output);
    }

    public serializeAs_NicknameRegistrationMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NicknameRegistrationMessage(input);
    }

    private deserializeAs_NicknameRegistrationMessage(input: ICustomDataInput)
    {

    }

}