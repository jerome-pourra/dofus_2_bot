import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class UpdatedStorageTabInformation implements INetworkType
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

    public getTypeId()
    {
        return UpdatedStorageTabInformation.protocolId;
    }

    public initUpdatedStorageTabInformation(name: string = "", tabNumber: number = 0, picto: number = 0, dropTypeLimitation: Array<number> = null): UpdatedStorageTabInformation
    {
        this.name = name;
        this.tabNumber = tabNumber;
        this.picto = picto;
        this.dropTypeLimitation = dropTypeLimitation;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_UpdatedStorageTabInformation(output);
    }

    public serializeAs_UpdatedStorageTabInformation(output: ICustomDataOutput)
    {
        output.writeUTF(this.name);
        if(this.tabNumber < 0)
        {
            throw new Error("Forbidden value (" + this.tabNumber + ") on element tabNumber.");
        }
        output.writeVarInt(this.tabNumber);
        if(this.picto < 0)
        {
            throw new Error("Forbidden value (" + this.picto + ") on element picto.");
        }
        output.writeVarInt(this.picto);
        output.writeShort(this.dropTypeLimitation.length);
        for(var _i4: number = 0; _i4 < this.dropTypeLimitation.length; _i4++)
        {
            if(this.dropTypeLimitation[_i4] < 0)
            {
                throw new Error("Forbidden value (" + this.dropTypeLimitation[_i4] + ") on element 4 (starting at 1) of dropTypeLimitation.");
            }
            output.writeVarInt(this.dropTypeLimitation[_i4]);
        }
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