import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceRanksRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7629;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceRanksRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceRanksRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceRanksRequestMessage.endpointServer;
    }

    public initAllianceRanksRequestMessage(): AllianceRanksRequestMessage
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
        this.serializeAs_AllianceRanksRequestMessage(output);
    }

    public serializeAs_AllianceRanksRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceRanksRequestMessage(input);
    }

    private deserializeAs_AllianceRanksRequestMessage(input: ICustomDataInput)
    {

    }

}