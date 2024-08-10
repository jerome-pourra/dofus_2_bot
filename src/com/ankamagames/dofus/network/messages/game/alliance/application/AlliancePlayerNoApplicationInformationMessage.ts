import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { AlliancePlayerApplicationAbstractMessage } from "./AlliancePlayerApplicationAbstractMessage";

export class AlliancePlayerNoApplicationInformationMessage extends AlliancePlayerApplicationAbstractMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7142;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AlliancePlayerNoApplicationInformationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AlliancePlayerNoApplicationInformationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AlliancePlayerNoApplicationInformationMessage.endpointServer;
    }

    public initAlliancePlayerNoApplicationInformationMessage(): AlliancePlayerNoApplicationInformationMessage
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
        this.serializeAs_AlliancePlayerNoApplicationInformationMessage(output);
    }

    public serializeAs_AlliancePlayerNoApplicationInformationMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AlliancePlayerNoApplicationInformationMessage(input);
    }

    private deserializeAs_AlliancePlayerNoApplicationInformationMessage(input: ICustomDataInput)
    {

    }

}