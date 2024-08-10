import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ReloginTokenRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7722;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ReloginTokenRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ReloginTokenRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ReloginTokenRequestMessage.endpointServer;
    }

    public initReloginTokenRequestMessage(): ReloginTokenRequestMessage
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
        this.serializeAs_ReloginTokenRequestMessage(output);
    }

    public serializeAs_ReloginTokenRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ReloginTokenRequestMessage(input);
    }

    private deserializeAs_ReloginTokenRequestMessage(input: ICustomDataInput)
    {

    }

}