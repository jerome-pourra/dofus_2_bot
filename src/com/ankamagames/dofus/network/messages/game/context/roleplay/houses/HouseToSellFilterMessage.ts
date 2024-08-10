import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HouseToSellFilterMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9188;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public areaId: number = 0;
	public atLeastNbRoom: number = 0;
	public atLeastNbChest: number = 0;
	public skillRequested: number = 0;
	public maxPrice: number = 0;
	public orderBy: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HouseToSellFilterMessage.protocolId;
    }

    public isEndpointClient()
    {
        return HouseToSellFilterMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return HouseToSellFilterMessage.endpointServer;
    }

    public initHouseToSellFilterMessage(areaId: number = 0, atLeastNbRoom: number = 0, atLeastNbChest: number = 0, skillRequested: number = 0, maxPrice: number = 0, orderBy: number = 0): HouseToSellFilterMessage
    {
        this.areaId = areaId;
        this.atLeastNbRoom = atLeastNbRoom;
        this.atLeastNbChest = atLeastNbChest;
        this.skillRequested = skillRequested;
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
        this.serializeAs_HouseToSellFilterMessage(output);
    }

    public serializeAs_HouseToSellFilterMessage(output: ICustomDataOutput)
    {
        output.writeInt(this.areaId);
        if(this.atLeastNbRoom < 0)
        {
            throw new Error("Forbidden value (" + this.atLeastNbRoom + ") on element atLeastNbRoom.");
        }
        output.writeByte(this.atLeastNbRoom);
        if(this.atLeastNbChest < 0)
        {
            throw new Error("Forbidden value (" + this.atLeastNbChest + ") on element atLeastNbChest.");
        }
        output.writeByte(this.atLeastNbChest);
        if(this.skillRequested < 0)
        {
            throw new Error("Forbidden value (" + this.skillRequested + ") on element skillRequested.");
        }
        output.writeVarShort(this.skillRequested);
        if(this.maxPrice < 0 || this.maxPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.maxPrice + ") on element maxPrice.");
        }
        output.writeVarLong(this.maxPrice);
        output.writeByte(this.orderBy);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseToSellFilterMessage(input);
    }

    private deserializeAs_HouseToSellFilterMessage(input: ICustomDataInput)
    {
        this._areaIdFunc(input);
        this._atLeastNbRoomFunc(input);
        this._atLeastNbChestFunc(input);
        this._skillRequestedFunc(input);
        this._maxPriceFunc(input);
        this._orderByFunc(input);
    }

    private _areaIdFunc(input: ICustomDataInput)
    {
        this.areaId = input.readInt();
    }

    private _atLeastNbRoomFunc(input: ICustomDataInput)
    {
        this.atLeastNbRoom = input.readByte();
        if(this.atLeastNbRoom < 0)
        {
            throw new Error("Forbidden value (" + this.atLeastNbRoom + ") on element of HouseToSellFilterMessage.atLeastNbRoom.");
        }
    }

    private _atLeastNbChestFunc(input: ICustomDataInput)
    {
        this.atLeastNbChest = input.readByte();
        if(this.atLeastNbChest < 0)
        {
            throw new Error("Forbidden value (" + this.atLeastNbChest + ") on element of HouseToSellFilterMessage.atLeastNbChest.");
        }
    }

    private _skillRequestedFunc(input: ICustomDataInput)
    {
        this.skillRequested = input.readVarUhShort();
        if(this.skillRequested < 0)
        {
            throw new Error("Forbidden value (" + this.skillRequested + ") on element of HouseToSellFilterMessage.skillRequested.");
        }
    }

    private _maxPriceFunc(input: ICustomDataInput)
    {
        this.maxPrice = input.readVarUhLong();
        if(this.maxPrice < 0 || this.maxPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.maxPrice + ") on element of HouseToSellFilterMessage.maxPrice.");
        }
    }

    private _orderByFunc(input: ICustomDataInput)
    {
        this.orderBy = input.readByte();
        if(this.orderBy < 0)
        {
            throw new Error("Forbidden value (" + this.orderBy + ") on element of HouseToSellFilterMessage.orderBy.");
        }
    }

}