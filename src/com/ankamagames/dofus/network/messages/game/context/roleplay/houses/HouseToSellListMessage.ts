import { HouseInformationsForSell } from "./../../../../../types/game/house/HouseInformationsForSell";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HouseToSellListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8317;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public pageIndex: number = 0;
	public totalPage: number = 0;
	public houseList: Array<HouseInformationsForSell>;

    public constructor()
    {
        super();
        this.houseList = Array<HouseInformationsForSell>();
    }

    public getMessageId()
    {
        return HouseToSellListMessage.protocolId;
    }

    public isEndpointClient()
    {
        return HouseToSellListMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return HouseToSellListMessage.endpointServer;
    }

    public initHouseToSellListMessage(pageIndex: number = 0, totalPage: number = 0, houseList: Array<HouseInformationsForSell> = null): HouseToSellListMessage
    {
        this.pageIndex = pageIndex;
        this.totalPage = totalPage;
        this.houseList = houseList;
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
        this.serializeAs_HouseToSellListMessage(output);
    }

    public serializeAs_HouseToSellListMessage(output: ICustomDataOutput)
    {
        if(this.pageIndex < 0)
        {
            throw new Error("Forbidden value (" + this.pageIndex + ") on element pageIndex.");
        }
        output.writeVarShort(this.pageIndex);
        if(this.totalPage < 0)
        {
            throw new Error("Forbidden value (" + this.totalPage + ") on element totalPage.");
        }
        output.writeVarShort(this.totalPage);
        output.writeShort(this.houseList.length);
        for(var _i3: number = 0; _i3 < this.houseList.length; _i3++)
        {
            (this.houseList[_i3] as HouseInformationsForSell).serializeAs_HouseInformationsForSell(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseToSellListMessage(input);
    }

    private deserializeAs_HouseToSellListMessage(input: ICustomDataInput)
    {
        let _item3: HouseInformationsForSell;
        this._pageIndexFunc(input);
        this._totalPageFunc(input);
        let _houseListLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _houseListLen; _i3++)
        {
            _item3 = new HouseInformationsForSell();
            _item3.deserialize(input);
            this.houseList.push(_item3);
        }
    }

    private _pageIndexFunc(input: ICustomDataInput)
    {
        this.pageIndex = input.readVarUhShort();
        if(this.pageIndex < 0)
        {
            throw new Error("Forbidden value (" + this.pageIndex + ") on element of HouseToSellListMessage.pageIndex.");
        }
    }

    private _totalPageFunc(input: ICustomDataInput)
    {
        this.totalPage = input.readVarUhShort();
        if(this.totalPage < 0)
        {
            throw new Error("Forbidden value (" + this.totalPage + ") on element of HouseToSellListMessage.totalPage.");
        }
    }

}