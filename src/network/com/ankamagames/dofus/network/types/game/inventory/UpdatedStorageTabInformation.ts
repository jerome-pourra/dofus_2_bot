import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class UpdatedStorageTabInformation
{

	public static readonly protocolId: number = 570;

	public name: string = "";
	public tabNumber: number = 0;
	public picto: number = 0;
	public dropTypeLimitation: Array<number>;

    public constructor()
    {
        this.dropTypeLimitation = Array<number>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_UpdatedStorageTabInformation(input);
    }

    private deserializeAs_UpdatedStorageTabInformation(input: ICustomDataInput)
    {
        let _val4: number = 0;
        this._nameFunc(input);
        this._tabNumberFunc(input);
        this._pictoFunc(input);
        let _dropTypeLimitationLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _dropTypeLimitationLen; _i4++)
        {
            _val4 = input.readVarUhInt();
            if(_val4 < 0)
            {
                throw new Error("Forbidden value (" + _val4 + ") on elements of dropTypeLimitation.");
            }
            this.dropTypeLimitation.push(_val4);
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
            throw new Error("Forbidden value (" + this.tabNumber + ") on element of UpdatedStorageTabInformation.tabNumber.");
        }
    }

    private _pictoFunc(input: ICustomDataInput)
    {
        this.picto = input.readVarUhInt();
        if(this.picto < 0)
        {
            throw new Error("Forbidden value (" + this.picto + ") on element of UpdatedStorageTabInformation.picto.");
        }
    }

}