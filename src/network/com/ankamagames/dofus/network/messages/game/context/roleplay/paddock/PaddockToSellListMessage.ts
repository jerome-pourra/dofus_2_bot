import { PaddockInformationsForSell } from "./../../../../../types/game/paddock/PaddockInformationsForSell";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class PaddockToSellListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7795;

	public pageIndex: number = 0;
	public totalPage: number = 0;
	public paddockList: Array<PaddockInformationsForSell>;

    public constructor()
    {
        super();
        this.paddockList = Array<PaddockInformationsForSell>();
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
        this.deserializeAs_PaddockToSellListMessage(input);
    }

    private deserializeAs_PaddockToSellListMessage(input: ICustomDataInput)
    {
        let _item3: PaddockInformationsForSell;
        this._pageIndexFunc(input);
        this._totalPageFunc(input);
        let _paddockListLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _paddockListLen; _i3++)
        {
            _item3 = new PaddockInformationsForSell();
            _item3.deserialize(input);
            this.paddockList.push(_item3);
        }
    }

    private _pageIndexFunc(input: ICustomDataInput)
    {
        this.pageIndex = input.readVarUhShort();
        if(this.pageIndex < 0)
        {
            throw new Error("Forbidden value (" + this.pageIndex + ") on element of PaddockToSellListMessage.pageIndex.");
        }
    }

    private _totalPageFunc(input: ICustomDataInput)
    {
        this.totalPage = input.readVarUhShort();
        if(this.totalPage < 0)
        {
            throw new Error("Forbidden value (" + this.totalPage + ") on element of PaddockToSellListMessage.totalPage.");
        }
    }

}