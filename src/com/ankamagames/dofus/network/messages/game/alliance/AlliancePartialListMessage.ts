import { AllianceFactSheetInformation } from "./../../../types/game/social/AllianceFactSheetInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { AllianceListMessage } from "./AllianceListMessage";

export class AlliancePartialListMessage extends AllianceListMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4178;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AlliancePartialListMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AlliancePartialListMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AlliancePartialListMessage.endpointServer;
    }

    public initAlliancePartialListMessage(alliances: Array<AllianceFactSheetInformation> = null): AlliancePartialListMessage
    {
        super.initAllianceListMessage(alliances);
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
        this.serializeAs_AlliancePartialListMessage(output);
    }

    public serializeAs_AlliancePartialListMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AllianceListMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AlliancePartialListMessage(input);
    }

    private deserializeAs_AlliancePartialListMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}