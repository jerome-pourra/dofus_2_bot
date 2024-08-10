import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class PaddockToSellFilterMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3852;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public areaId: number = 0;
	public atLeastNbMount: number = 0;
	public atLeastNbMachine: number = 0;
	public maxPrice: number = 0;
	public orderBy: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PaddockToSellFilterMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PaddockToSellFilterMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PaddockToSellFilterMessage.endpointServer;
    }

    public initPaddockToSellFilterMessage(areaId: number = 0, atLeastNbMount: number = 0, atLeastNbMachine: number = 0, maxPrice: number = 0, orderBy: number = 0): PaddockToSellFilterMessage
    {
        this.areaId = areaId;
        this.atLeastNbMount = atLeastNbMount;
        this.atLeastNbMachine = atLeastNbMachine;
        this.maxPrice = maxPrice;
        this.orderBy = orderBy;
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
        this.serializeAs_PaddockToSellFilterMessage(output);
    }

    public serializeAs_PaddockToSellFilterMessage(output: ICustomDataOutput)
    {
        output.writeInt(this.areaId);
        output.writeByte(this.atLeastNbMount);
        output.writeByte(this.atLeastNbMachine);
        if(this.maxPrice < 0 || this.maxPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.maxPrice + ") on element maxPrice.");
        }
        output.writeVarLong(this.maxPrice);
        output.writeByte(this.orderBy);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaddockToSellFilterMessage(input);
    }

    private deserializeAs_PaddockToSellFilterMessage(input: ICustomDataInput)
    {
        this._areaIdFunc(input);
        this._atLeastNbMountFunc(input);
        this._atLeastNbMachineFunc(input);
        this._maxPriceFunc(input);
        this._orderByFunc(input);
    }

    private _areaIdFunc(input: ICustomDataInput)
    {
        this.areaId = input.readInt();
    }

    private _atLeastNbMountFunc(input: ICustomDataInput)
    {
        this.atLeastNbMount = input.readByte();
    }

    private _atLeastNbMachineFunc(input: ICustomDataInput)
    {
        this.atLeastNbMachine = input.readByte();
    }

    private _maxPriceFunc(input: ICustomDataInput)
    {
        this.maxPrice = input.readVarUhLong();
        if(this.maxPrice < 0 || this.maxPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.maxPrice + ") on element of PaddockToSellFilterMessage.maxPrice.");
        }
    }

    private _orderByFunc(input: ICustomDataInput)
    {
        this.orderBy = input.readByte();
        if(this.orderBy < 0)
        {
            throw new Error("Forbidden value (" + this.orderBy + ") on element of PaddockToSellFilterMessage.orderBy.");
        }
    }

}