import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HouseBuyRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5849;

	public proposedPrice: number = 0;

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
        this.deserializeAs_HouseBuyRequestMessage(input);
    }

    private deserializeAs_HouseBuyRequestMessage(input: ICustomDataInput)
    {
        this._proposedPriceFunc(input);
    }

    private _proposedPriceFunc(input: ICustomDataInput)
    {
        this.proposedPrice = input.readVarUhLong();
        if(this.proposedPrice < 0 || this.proposedPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.proposedPrice + ") on element of HouseBuyRequestMessage.proposedPrice.");
        }
    }

}