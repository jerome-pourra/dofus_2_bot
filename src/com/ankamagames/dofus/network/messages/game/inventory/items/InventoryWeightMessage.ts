import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class InventoryWeightMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9677;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public inventoryWeight: number = 0;
	public weightMax: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return InventoryWeightMessage.protocolId;
    }

    public isEndpointClient()
    {
        return InventoryWeightMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return InventoryWeightMessage.endpointServer;
    }

    public initInventoryWeightMessage(inventoryWeight: number = 0, weightMax: number = 0): InventoryWeightMessage
    {
        this.inventoryWeight = inventoryWeight;
        this.weightMax = weightMax;
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
        this.serializeAs_InventoryWeightMessage(output);
    }

    public serializeAs_InventoryWeightMessage(output: ICustomDataOutput)
    {
        if(this.inventoryWeight < 0)
        {
            throw new Error("Forbidden value (" + this.inventoryWeight + ") on element inventoryWeight.");
        }
        output.writeVarInt(this.inventoryWeight);
        if(this.weightMax < 0)
        {
            throw new Error("Forbidden value (" + this.weightMax + ") on element weightMax.");
        }
        output.writeVarInt(this.weightMax);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_InventoryWeightMessage(input);
    }

    private deserializeAs_InventoryWeightMessage(input: ICustomDataInput)
    {
        this._inventoryWeightFunc(input);
        this._weightMaxFunc(input);
    }

    private _inventoryWeightFunc(input: ICustomDataInput)
    {
        this.inventoryWeight = input.readVarUhInt();
        if(this.inventoryWeight < 0)
        {
            throw new Error("Forbidden value (" + this.inventoryWeight + ") on element of InventoryWeightMessage.inventoryWeight.");
        }
    }

    private _weightMaxFunc(input: ICustomDataInput)
    {
        this.weightMax = input.readVarUhInt();
        if(this.weightMax < 0)
        {
            throw new Error("Forbidden value (" + this.weightMax + ") on element of InventoryWeightMessage.weightMax.");
        }
    }

}