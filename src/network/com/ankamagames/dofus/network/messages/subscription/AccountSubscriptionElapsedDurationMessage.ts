import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class AccountSubscriptionElapsedDurationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5336;

	public subscriptionElapsedDuration: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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