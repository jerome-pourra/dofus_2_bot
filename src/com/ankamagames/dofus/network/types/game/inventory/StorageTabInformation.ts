import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class StorageTabInformation implements INetworkType
{

	public static readonly protocolId: number = 8947;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

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

    public getTypeId()
    {
        return StorageTabInformation.protocolId;
    }

    public isEndpointClient()
    {
        return StorageTabInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return StorageTabInformation.endpointServer;
    }

    public initStorageTabInformation(name: string = "", tabNumber: number = 0, picto: number = 0, openRight: number = 0, dropRight: number = 0, takeRight: number = 0, dropTypeLimitation: Array<number> = null): StorageTabInformation
    {
        this.name = name;
        this.tabNumber = tabNumber;
        this.picto = picto;
        this.openRight = openRight;
        this.dropRight = dropRight;
        this.takeRight = takeRight;
        this.dropTypeLimitation = dropTypeLimitation;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_StorageTabInformation(output);
    }

    public serializeAs_StorageTabInformation(output: ICustomDataOutput)
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
        if(this.openRight < 0)
        {
            throw new Error("Forbidden value (" + this.openRight + ") on element openRight.");
        }
        output.writeVarInt(this.openRight);
        if(this.dropRight < 0)
        {
            throw new Error("Forbidden value (" + this.dropRight + ") on element dropRight.");
        }
        output.writeVarInt(this.dropRight);
        if(this.takeRight < 0)
        {
            throw new Error("Forbidden value (" + this.takeRight + ") on element takeRight.");
        }
        output.writeVarInt(this.takeRight);
        output.writeShort(this.dropTypeLimitation.length);
        for(var _i7: number = 0; _i7 < this.dropTypeLimitation.length; _i7++)
        {
            if(this.dropTypeLimitation[_i7] < 0)
            {
                throw new Error("Forbidden value (" + this.dropTypeLimitation[_i7] + ") on element 7 (starting at 1) of dropTypeLimitation.");
            }
            output.writeVarInt(this.dropTypeLimitation[_i7]);
        }
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