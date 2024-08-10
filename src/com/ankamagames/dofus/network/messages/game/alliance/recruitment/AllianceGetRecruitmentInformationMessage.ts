import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceGetRecruitmentInformationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1212;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceGetRecruitmentInformationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceGetRecruitmentInformationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceGetRecruitmentInformationMessage.endpointServer;
    }

    public initAllianceGetRecruitmentInformationMessage(): AllianceGetRecruitmentInformationMessage
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
        this.serializeAs_AllianceGetRecruitmentInformationMessage(output);
    }

    public serializeAs_AllianceGetRecruitmentInformationMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceGetRecruitmentInformationMessage(input);
    }

    private deserializeAs_AllianceGetRecruitmentInformationMessage(input: ICustomDataInput)
    {

    }

}