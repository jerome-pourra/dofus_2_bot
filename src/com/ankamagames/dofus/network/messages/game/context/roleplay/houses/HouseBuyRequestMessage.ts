import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HouseBuyRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5849;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public proposedPrice: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HouseBuyRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return HouseBuyRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return HouseBuyRequestMessage.endpointServer;
    }

    public initHouseBuyRequestMessage(proposedPrice: number = 0): HouseBuyRequestMessage
    {
        this.proposedPrice = proposedPrice;
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
        this.serializeAs_HouseBuyRequestMessage(output);
    }

    public serializeAs_HouseBuyRequestMessage(output: ICustomDataOutput)
    {
        if(this.proposedPrice < 0 || this.proposedPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.proposedPrice + ") on element proposedPrice.");
        }
        output.writeVarLong(this.proposedPrice);
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