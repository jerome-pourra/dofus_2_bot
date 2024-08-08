import { InteractiveElement } from "./../../../types/game/interactive/InteractiveElement";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class InteractiveElementUpdatedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8912;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public interactiveElement: InteractiveElement;

    public constructor()
    {
        super();
        this.interactiveElement = new InteractiveElement();
    }

    public getMessageId()
    {
        return InteractiveElementUpdatedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return InteractiveElementUpdatedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return InteractiveElementUpdatedMessage.endpointServer;
    }

    public initInteractiveElementUpdatedMessage(interactiveElement: InteractiveElement = null): InteractiveElementUpdatedMessage
    {
        this.interactiveElement = interactiveElement;
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
        this.serializeAs_InteractiveElementUpdatedMessage(output);
    }

    public serializeAs_InteractiveElementUpdatedMessage(output: ICustomDataOutput)
    {
        this.interactiveElement.serializeAs_InteractiveElement(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_InteractiveElementUpdatedMessage(input);
    }

    private deserializeAs_InteractiveElementUpdatedMessage(input: ICustomDataInput)
    {
        this.interactiveElement = new InteractiveElement();
        this.interactiveElement.deserialize(input);
    }

}