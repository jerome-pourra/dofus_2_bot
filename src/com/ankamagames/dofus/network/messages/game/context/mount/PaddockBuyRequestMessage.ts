import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class PaddockBuyRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1669;

	public proposedPrice: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PaddockBuyRequestMessage.protocolId;
    }

    public initPaddockBuyRequestMessage(proposedPrice: number = 0): PaddockBuyRequestMessage
    {
        this.proposedPrice = proposedPrice;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PaddockBuyRequestMessage(output);
    }

    public serializeAs_PaddockBuyRequestMessage(output: ICustomDataOutput)
    {
        if(this.proposedPrice < 0 || this.proposedPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.proposedPrice + ") on element proposedPrice.");
        }
        output.writeVarLong(this.proposedPrice);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaddockBuyRequestMessage(input);
    }

    private deserializeAs_PaddockBuyRequestMessage(input: ICustomDataInput)
    {
        this._proposedPriceFunc(input);
    }

    private _proposedPriceFunc(input: ICustomDataInput)
    {
        this.proposedPrice = input.readVarUhLong();
        if(this.proposedPrice < 0 || this.proposedPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.proposedPrice + ") on element of PaddockBuyRequestMessage.proposedPrice.");
        }
    }

}