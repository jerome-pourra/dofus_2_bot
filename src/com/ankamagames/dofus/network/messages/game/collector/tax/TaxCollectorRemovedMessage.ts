import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorRemovedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2310;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public collectorId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TaxCollectorRemovedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TaxCollectorRemovedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TaxCollectorRemovedMessage.endpointServer;
    }

    public initTaxCollectorRemovedMessage(collectorId: number = 0): TaxCollectorRemovedMessage
    {
        this.collectorId = collectorId;
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
        this.serializeAs_TaxCollectorRemovedMessage(output);
    }

    public serializeAs_TaxCollectorRemovedMessage(output: ICustomDataOutput)
    {
        if(this.collectorId < 0 || this.collectorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.collectorId + ") on element collectorId.");
        }
        output.writeDouble(this.collectorId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorRemovedMessage(input);
    }

    private deserializeAs_TaxCollectorRemovedMessage(input: ICustomDataInput)
    {
        this._collectorIdFunc(input);
    }

    private _collectorIdFunc(input: ICustomDataInput)
    {
        this.collectorId = input.readDouble();
        if(this.collectorId < 0 || this.collectorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.collectorId + ") on element of TaxCollectorRemovedMessage.collectorId.");
        }
    }

}