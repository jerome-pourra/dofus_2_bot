import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class StorageTabInformation
{

	public static readonly protocolId: number = 8947;

	public name: string = "";
	public tabNumber: number = 0;
	public picto: number = 0;
	public openRight: number = 0;
	public dropRight: number = 0;
	public takeRight: number = 0;
	public dropTypeLimitation: Array<number>;

    public constructor()
    {
        this.dropTypeLimitation = Array<number>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StorageTabInformation(input);
    }

    private deserializeAs_StorageTabInformation(input: ICustomDataInput)
    {
        let _val7: number = 0;
        this._nameFunc(input);
        this._tabNumberFunc(input);
        this._pictoFunc(input);
        this._openRightFunc(input);
        this._dropRightFunc(input);
        this._takeRightFunc(input);
        let _dropTypeLimitationLen: number = input.readUnsignedShort();
        for(let _i7: number = 0; _i7 < _dropTypeLimitationLen; _i7++)
        {
            _val7 = input.readVarUhInt();
            if(_val7 < 0)
            {
                throw new Error("Forbidden value (" + _val7 + ") on elements of dropTypeLimitation.");
            }
            this.dropTypeLimitation.push(_val7);
        }
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

    private _tabNumberFunc(input: ICustomDataInput)
    {
        this.tabNumber = input.readVarUhInt();
        if(this.tabNumber < 0)
        {
            throw new Error("Forbidden value (" + this.tabNumber + ") on element of StorageTabInformation.tabNumber.");
        }
    }

    private _pictoFunc(input: ICustomDataInput)
    {
        this.picto = input.readVarUhInt();
        if(this.picto < 0)
        {
            throw new Error("Forbidden value (" + this.picto + ") on element of StorageTabInformation.picto.");
        }
    }

    private _openRightFunc(input: ICustomDataInput)
    {
        this.openRight = input.readVarUhInt();
        if(this.openRight < 0)
        {
            throw new Error("Forbidden value (" + this.openRight + ") on element of StorageTabInformation.openRight.");
        }
    }

    private _dropRightFunc(input: ICustomDataInput)
    {
        this.dropRight = input.readVarUhInt();
        if(this.dropRight < 0)
        {
            throw new Error("Forbidden value (" + this.dropRight + ") on element of StorageTabInformation.dropRight.");
        }
    }

    private _takeRightFunc(input: ICustomDataInput)
    {
        this.takeRight = input.readVarUhInt();
        if(this.takeRight < 0)
        {
            throw new Error("Forbidden value (" + this.takeRight + ") on element of StorageTabInformation.takeRight.");
        }
    }

}