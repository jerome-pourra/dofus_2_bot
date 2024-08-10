import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PopupWarningCloseRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 663;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PopupWarningCloseRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PopupWarningCloseRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PopupWarningCloseRequestMessage.endpointServer;
    }

    public initPopupWarningCloseRequestMessage(): PopupWarningCloseRequestMessage
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
        this.serializeAs_PopupWarningCloseRequestMessage(output);
    }

    public serializeAs_PopupWarningCloseRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PopupWarningCloseRequestMessage(input);
    }

    private deserializeAs_PopupWarningCloseRequestMessage(input: ICustomDataInput)
    {

    }

}