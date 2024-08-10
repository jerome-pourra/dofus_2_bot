import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorHarvestedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3704;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public taxCollectorId: number = 0;
	public harvesterId: number = 0;
	public harvesterName: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TaxCollectorHarvestedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TaxCollectorHarvestedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TaxCollectorHarvestedMessage.endpointServer;
    }

    public initTaxCollectorHarvestedMessage(taxCollectorId: number = 0, harvesterId: number = 0, harvesterName: string = ""): TaxCollectorHarvestedMessage
    {
        this.taxCollectorId = taxCollectorId;
        this.harvesterId = harvesterId;
        this.harvesterName = harvesterName;
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
        this.serializeAs_TaxCollectorHarvestedMessage(output);
    }

    public serializeAs_TaxCollectorHarvestedMessage(output: ICustomDataOutput)
    {
        if(this.taxCollectorId < 0 || this.taxCollectorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.taxCollectorId + ") on element taxCollectorId.");
        }
        output.writeDouble(this.taxCollectorId);
        if(this.harvesterId < 0 || this.harvesterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.harvesterId + ") on element harvesterId.");
        }
        output.writeVarLong(this.harvesterId);
        output.writeUTF(this.harvesterName);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorHarvestedMessage(input);
    }

    private deserializeAs_TaxCollectorHarvestedMessage(input: ICustomDataInput)
    {
        this._taxCollectorIdFunc(input);
        this._harvesterIdFunc(input);
        this._harvesterNameFunc(input);
    }

    private _taxCollectorIdFunc(input: ICustomDataInput)
    {
        this.taxCollectorId = input.readDouble();
        if(this.taxCollectorId < 0 || this.taxCollectorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.taxCollectorId + ") on element of TaxCollectorHarvestedMessage.taxCollectorId.");
        }
    }

    private _harvesterIdFunc(input: ICustomDataInput)
    {
        this.harvesterId = input.readVarUhLong();
        if(this.harvesterId < 0 || this.harvesterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.harvesterId + ") on element of TaxCollectorHarvestedMessage.harvesterId.");
        }
    }

    private _harvesterNameFunc(input: ICustomDataInput)
    {
        this.harvesterName = input.readUTF();
    }

}