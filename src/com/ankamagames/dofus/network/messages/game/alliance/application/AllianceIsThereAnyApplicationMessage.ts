import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceIsThereAnyApplicationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8505;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceIsThereAnyApplicationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceIsThereAnyApplicationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceIsThereAnyApplicationMessage.endpointServer;
    }

    public initAllianceIsThereAnyApplicationMessage(): AllianceIsThereAnyApplicationMessage
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
        this.serializeAs_AllianceIsThereAnyApplicationMessage(output);
    }

    public serializeAs_AllianceIsThereAnyApplicationMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceIsThereAnyApplicationMessage(input);
    }

    private deserializeAs_AllianceIsThereAnyApplicationMessage(input: ICustomDataInput)
    {

    }

}