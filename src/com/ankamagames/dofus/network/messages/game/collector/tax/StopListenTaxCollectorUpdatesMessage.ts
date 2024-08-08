import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class StopListenTaxCollectorUpdatesMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4576;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public taxCollectorId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return StopListenTaxCollectorUpdatesMessage.protocolId;
    }

    public isEndpointClient()
    {
        return StopListenTaxCollectorUpdatesMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return StopListenTaxCollectorUpdatesMessage.endpointServer;
    }

    public initStopListenTaxCollectorUpdatesMessage(taxCollectorId: number = 0): StopListenTaxCollectorUpdatesMessage
    {
        this.taxCollectorId = taxCollectorId;
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
        this.serializeAs_StopListenTaxCollectorUpdatesMessage(output);
    }

    public serializeAs_StopListenTaxCollectorUpdatesMessage(output: ICustomDataOutput)
    {
        if(this.taxCollectorId < 0 || this.taxCollectorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.taxCollectorId + ") on element taxCollectorId.");
        }
        output.writeDouble(this.taxCollectorId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StopListenTaxCollectorUpdatesMessage(input);
    }

    private deserializeAs_StopListenTaxCollectorUpdatesMessage(input: ICustomDataInput)
    {
        this._taxCollectorIdFunc(input);
    }

    private _taxCollectorIdFunc(input: ICustomDataInput)
    {
        this.taxCollectorId = input.readDouble();
        if(this.taxCollectorId < 0 || this.taxCollectorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.taxCollectorId + ") on element of StopListenTaxCollectorUpdatesMessage.taxCollectorId.");
        }
    }

}