import { PaginationRequestAbstractMessage } from "./../PaginationRequestAbstractMessage";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";

export class GuildSummaryRequestMessage extends PaginationRequestAbstractMessage
{

	public static readonly protocolId: number = 1163;

	public nameFilter: string = "";
	public hideFullFilter: boolean = false;
	public followingGuildCriteria: boolean = false;
	public criterionFilter: Array<number>;
	public languagesFilter: Array<number>;
	public recruitmentTypeFilter: Array<number>;
	public minLevelFilter: number = 0;
	public maxLevelFilter: number = 0;
	public minPlayerLevelFilter: number = 0;
	public maxPlayerLevelFilter: number = 0;
	public minSuccessFilter: number = 0;
	public maxSuccessFilter: number = 0;
	public sortType: number = 0;
	public sortDescending: boolean = false;

    public constructor()
    {
        super();
        this.criterionFilter = Array<number>();
        this.languagesFilter = Array<number>();
        this.recruitmentTypeFilter = Array<number>();
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
        this.deserializeAs_GuildSummaryRequestMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.hideFullFilter = BooleanByteWrapper.getFlag(_box0,0);
        this.followingGuildCriteria = BooleanByteWrapper.getFlag(_box0,1);
        this.sortDescending = BooleanByteWrapper.getFlag(_box0,2);
    }

    private deserializeAs_GuildSummaryRequestMessage(input: ICustomDataInput)
    {
        let _val4: number = 0;
        let _val5: number = 0;
        let _val6: number = 0;
        super.deserialize(input);
        this.deserializeByteBoxes(input);
        this._nameFilterFunc(input);
        let _criterionFilterLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _criterionFilterLen; _i4++)
        {
            _val4 = input.readVarUhInt();
            if(_val4 < 0)
            {
                throw new Error("Forbidden value (" + _val4 + ") on elements of criterionFilter.");
            }
            this.criterionFilter.push(_val4);
        }
        let _languagesFilterLen: number = input.readUnsignedShort();
        for(let _i5: number = 0; _i5 < _languagesFilterLen; _i5++)
        {
            _val5 = input.readVarUhInt();
            if(_val5 < 0)
            {
                throw new Error("Forbidden value (" + _val5 + ") on elements of languagesFilter.");
            }
            this.languagesFilter.push(_val5);
        }
        let _recruitmentTypeFilterLen: number = input.readUnsignedShort();
        for(let _i6: number = 0; _i6 < _recruitmentTypeFilterLen; _i6++)
        {
            _val6 = input.readByte();
            if(_val6 < 0)
            {
                throw new Error("Forbidden value (" + _val6 + ") on elements of recruitmentTypeFilter.");
            }
            this.recruitmentTypeFilter.push(_val6);
        }
        this._minLevelFilterFunc(input);
        this._maxLevelFilterFunc(input);
        this._minPlayerLevelFilterFunc(input);
        this._maxPlayerLevelFilterFunc(input);
        this._minSuccessFilterFunc(input);
        this._maxSuccessFilterFunc(input);
        this._sortTypeFunc(input);
    }

    private _nameFilterFunc(input: ICustomDataInput)
    {
        this.nameFilter = input.readUTF();
    }

    private _minLevelFilterFunc(input: ICustomDataInput)
    {
        this.minLevelFilter = input.readShort();
        if(this.minLevelFilter < 0)
        {
            throw new Error("Forbidden value (" + this.minLevelFilter + ") on element of GuildSummaryRequestMessage.minLevelFilter.");
        }
    }

    private _maxLevelFilterFunc(input: ICustomDataInput)
    {
        this.maxLevelFilter = input.readShort();
        if(this.maxLevelFilter < 0)
        {
            throw new Error("Forbidden value (" + this.maxLevelFilter + ") on element of GuildSummaryRequestMessage.maxLevelFilter.");
        }
    }

    private _minPlayerLevelFilterFunc(input: ICustomDataInput)
    {
        this.minPlayerLevelFilter = input.readShort();
        if(this.minPlayerLevelFilter < 0)
        {
            throw new Error("Forbidden value (" + this.minPlayerLevelFilter + ") on element of GuildSummaryRequestMessage.minPlayerLevelFilter.");
        }
    }

    private _maxPlayerLevelFilterFunc(input: ICustomDataInput)
    {
        this.maxPlayerLevelFilter = input.readShort();
        if(this.maxPlayerLevelFilter < 0)
        {
            throw new Error("Forbidden value (" + this.maxPlayerLevelFilter + ") on element of GuildSummaryRequestMessage.maxPlayerLevelFilter.");
        }
    }

    private _minSuccessFilterFunc(input: ICustomDataInput)
    {
        this.minSuccessFilter = input.readVarUhInt();
        if(this.minSuccessFilter < 0)
        {
            throw new Error("Forbidden value (" + this.minSuccessFilter + ") on element of GuildSummaryRequestMessage.minSuccessFilter.");
        }
    }

    private _maxSuccessFilterFunc(input: ICustomDataInput)
    {
        this.maxSuccessFilter = input.readVarUhInt();
        if(this.maxSuccessFilter < 0)
        {
            throw new Error("Forbidden value (" + this.maxSuccessFilter + ") on element of GuildSummaryRequestMessage.maxSuccessFilter.");
        }
    }

    private _sortTypeFunc(input: ICustomDataInput)
    {
        this.sortType = input.readByte();
        if(this.sortType < 0)
        {
            throw new Error("Forbidden value (" + this.sortType + ") on element of GuildSummaryRequestMessage.sortType.");
        }
    }

}