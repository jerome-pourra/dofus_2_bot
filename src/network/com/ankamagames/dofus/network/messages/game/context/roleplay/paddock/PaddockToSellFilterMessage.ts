import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class PaddockToSellFilterMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3852;

	public areaId: number = 0;
	public atLeastNbMount: number = 0;
	public atLeastNbMachine: number = 0;
	public maxPrice: number = 0;
	public orderBy: number = 0;

    public constructor()
    {
        super();
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