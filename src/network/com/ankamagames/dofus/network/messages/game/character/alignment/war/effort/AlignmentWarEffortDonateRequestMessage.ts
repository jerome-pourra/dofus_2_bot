import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class AlignmentWarEffortDonateRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5431;

	public donation: number = 0;

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
        this.deserializeAs_AlignmentWarEffortDonateRequestMessage(input);
    }

    private deserializeAs_AlignmentWarEffortDonateRequestMessage(input: ICustomDataInput)
    {
        this._donationFunc(input);
    }

    private _donationFunc(input: ICustomDataInput)
    {
        this.donation = input.readVarUhLong();
        if(this.donation < 0 || this.donation > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.donation + ") on element of AlignmentWarEffortDonateRequestMessage.donation.");
        }
    }

}