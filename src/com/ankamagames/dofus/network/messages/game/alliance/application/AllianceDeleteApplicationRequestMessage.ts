import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceDeleteApplicationRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6027;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceDeleteApplicationRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceDeleteApplicationRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceDeleteApplicationRequestMessage.endpointServer;
    }

    public initAllianceDeleteApplicationRequestMessage(): AllianceDeleteApplicationRequestMessage
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
        this.serializeAs_AllianceDeleteApplicationRequestMessage(output);
    }

    public serializeAs_AllianceDeleteApplicationRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceDeleteApplicationRequestMessage(input);
    }

    private deserializeAs_AllianceDeleteApplicationRequestMessage(input: ICustomDataInput)
    {

    }

}