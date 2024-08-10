import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class AccountInformationsUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4545;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public subscriptionEndDate: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AccountInformationsUpdateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AccountInformationsUpdateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AccountInformationsUpdateMessage.endpointServer;
    }

    public initAccountInformationsUpdateMessage(subscriptionEndDate: number = 0): AccountInformationsUpdateMessage
    {
        this.subscriptionEndDate = subscriptionEndDate;
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
        this.serializeAs_AccountInformationsUpdateMessage(output);
    }

    public serializeAs_AccountInformationsUpdateMessage(output: ICustomDataOutput)
    {
        if(this.subscriptionEndDate < 0 || this.subscriptionEndDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.subscriptionEndDate + ") on element subscriptionEndDate.");
        }
        output.writeDouble(this.subscriptionEndDate);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AccountInformationsUpdateMessage(input);
    }

    private deserializeAs_AccountInformationsUpdateMessage(input: ICustomDataInput)
    {
        this._subscriptionEndDateFunc(input);
    }

    private _subscriptionEndDateFunc(input: ICustomDataInput)
    {
        this.subscriptionEndDate = input.readDouble();
        if(this.subscriptionEndDate < 0 || this.subscriptionEndDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.subscriptionEndDate + ") on element of AccountInformationsUpdateMessage.subscriptionEndDate.");
        }
    }

}