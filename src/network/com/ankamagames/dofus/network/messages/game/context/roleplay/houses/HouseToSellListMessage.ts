import { HouseInformationsForSell } from "./../../../../../types/game/house/HouseInformationsForSell";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HouseToSellListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8317;

	public pageIndex: number = 0;
	public totalPage: number = 0;
	public houseList: Array<HouseInformationsForSell>;

    public constructor()
    {
        super();
        this.houseList = Array<HouseInformationsForSell>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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