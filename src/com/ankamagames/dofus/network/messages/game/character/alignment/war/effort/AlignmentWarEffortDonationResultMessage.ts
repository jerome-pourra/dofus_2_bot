import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class AlignmentWarEffortDonationResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1517;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public result: number = 4;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AlignmentWarEffortDonationResultMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AlignmentWarEffortDonationResultMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AlignmentWarEffortDonationResultMessage.endpointServer;
    }

    public initAlignmentWarEffortDonationResultMessage(result: number = 4): AlignmentWarEffortDonationResultMessage
    {
        this.result = result;
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
        this.serializeAs_AlignmentWarEffortDonationResultMessage(output);
    }

    public serializeAs_AlignmentWarEffortDonationResultMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.result);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AlignmentWarEffortDonationResultMessage(input);
    }

    private deserializeAs_AlignmentWarEffortDonationResultMessage(input: ICustomDataInput)
    {
        this._resultFunc(input);
    }

    private _resultFunc(input: ICustomDataInput)
    {
        this.result = input.readByte();
    }

}