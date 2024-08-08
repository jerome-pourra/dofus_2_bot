import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class AccountSubscriptionElapsedDurationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5336;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public subscriptionElapsedDuration: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AccountSubscriptionElapsedDurationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AccountSubscriptionElapsedDurationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AccountSubscriptionElapsedDurationMessage.endpointServer;
    }

    public initAccountSubscriptionElapsedDurationMessage(subscriptionElapsedDuration: number = 0): AccountSubscriptionElapsedDurationMessage
    {
        this.subscriptionElapsedDuration = subscriptionElapsedDuration;
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
        this.serializeAs_AccountSubscriptionElapsedDurationMessage(output);
    }

    public serializeAs_AccountSubscriptionElapsedDurationMessage(output: ICustomDataOutput)
    {
        if(this.subscriptionElapsedDuration < 0 || this.subscriptionElapsedDuration > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.subscriptionElapsedDuration + ") on element subscriptionElapsedDuration.");
        }
        output.writeDouble(this.subscriptionElapsedDuration);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AccountSubscriptionElapsedDurationMessage(input);
    }

    private deserializeAs_AccountSubscriptionElapsedDurationMessage(input: ICustomDataInput)
    {
        this._subscriptionElapsedDurationFunc(input);
    }

    private _subscriptionElapsedDurationFunc(input: ICustomDataInput)
    {
        this.subscriptionElapsedDuration = input.readDouble();
        if(this.subscriptionElapsedDuration < 0 || this.subscriptionElapsedDuration > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.subscriptionElapsedDuration + ") on element of AccountSubscriptionElapsedDurationMessage.subscriptionElapsedDuration.");
        }
    }

}