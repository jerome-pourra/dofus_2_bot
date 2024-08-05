import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class AccountInformationsUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4545;

	public subscriptionEndDate: number = 0;

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