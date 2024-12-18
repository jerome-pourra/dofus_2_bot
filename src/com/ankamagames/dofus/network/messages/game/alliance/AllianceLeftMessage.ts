import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceLeftMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6490;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceLeftMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceLeftMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceLeftMessage.endpointServer;
    }

    public initAllianceLeftMessage(): AllianceLeftMessage
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
        this.serializeAs_AllianceLeftMessage(output);
    }

    public serializeAs_AllianceLeftMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceLeftMessage(input);
    }

    private deserializeAs_AllianceLeftMessage(input: ICustomDataInput)
    {

    }

}