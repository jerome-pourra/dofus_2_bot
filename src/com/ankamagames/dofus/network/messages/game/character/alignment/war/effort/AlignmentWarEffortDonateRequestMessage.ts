import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class AlignmentWarEffortDonateRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5431;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public donation: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AlignmentWarEffortDonateRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AlignmentWarEffortDonateRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AlignmentWarEffortDonateRequestMessage.endpointServer;
    }

    public initAlignmentWarEffortDonateRequestMessage(donation: number = 0): AlignmentWarEffortDonateRequestMessage
    {
        this.donation = donation;
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
        this.serializeAs_AlignmentWarEffortDonateRequestMessage(output);
    }

    public serializeAs_AlignmentWarEffortDonateRequestMessage(output: ICustomDataOutput)
    {
        if(this.donation < 0 || this.donation > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.donation + ") on element donation.");
        }
        output.writeVarLong(this.donation);
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