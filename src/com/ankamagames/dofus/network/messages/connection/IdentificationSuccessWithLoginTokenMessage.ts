import { AccountTagInformation } from "./../../types/common/AccountTagInformation";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { IdentificationSuccessMessage } from "./IdentificationSuccessMessage";

export class IdentificationSuccessWithLoginTokenMessage extends IdentificationSuccessMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3224;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public loginToken: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return IdentificationSuccessWithLoginTokenMessage.protocolId;
    }

    public isEndpointClient()
    {
        return IdentificationSuccessWithLoginTokenMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return IdentificationSuccessWithLoginTokenMessage.endpointServer;
    }

    public initIdentificationSuccessWithLoginTokenMessage(login: string = "", accountTag: AccountTagInformation = null, accountId: number = 0, communityId: number = 0, hasRights: boolean = false, hasReportRight: boolean = false, hasForceRight: boolean = false, accountCreation: number = 0, subscriptionEndDate: number = 0, wasAlreadyConnected: boolean = false, havenbagAvailableRoom: number = 0, loginToken: string = ""): IdentificationSuccessWithLoginTokenMessage
    {
        super.initIdentificationSuccessMessage(login,accountTag,accountId,communityId,hasRights,hasReportRight,hasForceRight,accountCreation,subscriptionEndDate,wasAlreadyConnected,havenbagAvailableRoom);
        this.loginToken = loginToken;
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
        this.serializeAs_IdentificationSuccessWithLoginTokenMessage(output);
    }

    public serializeAs_IdentificationSuccessWithLoginTokenMessage(output: ICustomDataOutput)
    {
        super.serializeAs_IdentificationSuccessMessage(output);
        output.writeUTF(this.loginToken);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IdentificationSuccessWithLoginTokenMessage(input);
    }

    private deserializeAs_IdentificationSuccessWithLoginTokenMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._loginTokenFunc(input);
    }

    private _loginTokenFunc(input: ICustomDataInput)
    {
        this.loginToken = input.readUTF();
    }

}