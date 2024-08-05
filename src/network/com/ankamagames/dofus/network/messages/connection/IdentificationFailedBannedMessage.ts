import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { IdentificationFailedMessage } from "./IdentificationFailedMessage";

export class IdentificationFailedBannedMessage extends IdentificationFailedMessage
{

	public static readonly protocolId: number = 8668;

	public banEndDate: number = 0;

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
        this.deserializeAs_IdentificationFailedBannedMessage(input);
    }

    private deserializeAs_IdentificationFailedBannedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._banEndDateFunc(input);
    }

    private _banEndDateFunc(input: ICustomDataInput)
    {
        this.banEndDate = input.readDouble();
        if(this.banEndDate < 0 || this.banEndDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.banEndDate + ") on element of IdentificationFailedBannedMessage.banEndDate.");
        }
    }

}