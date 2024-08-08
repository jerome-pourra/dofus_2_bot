import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class TreasureHuntLegendaryRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7183;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public legendaryId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TreasureHuntLegendaryRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TreasureHuntLegendaryRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TreasureHuntLegendaryRequestMessage.endpointServer;
    }

    public initTreasureHuntLegendaryRequestMessage(legendaryId: number = 0): TreasureHuntLegendaryRequestMessage
    {
        this.legendaryId = legendaryId;
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
        this.serializeAs_TreasureHuntLegendaryRequestMessage(output);
    }

    public serializeAs_TreasureHuntLegendaryRequestMessage(output: ICustomDataOutput)
    {
        if(this.legendaryId < 0)
        {
            throw new Error("Forbidden value (" + this.legendaryId + ") on element legendaryId.");
        }
        output.writeVarShort(this.legendaryId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntLegendaryRequestMessage(input);
    }

    private deserializeAs_TreasureHuntLegendaryRequestMessage(input: ICustomDataInput)
    {
        this._legendaryIdFunc(input);
    }

    private _legendaryIdFunc(input: ICustomDataInput)
    {
        this.legendaryId = input.readVarUhShort();
        if(this.legendaryId < 0)
        {
            throw new Error("Forbidden value (" + this.legendaryId + ") on element of TreasureHuntLegendaryRequestMessage.legendaryId.");
        }
    }

}