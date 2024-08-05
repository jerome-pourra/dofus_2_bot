import { PaginationRequestAbstractMessage } from "./../../PaginationRequestAbstractMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { BooleanByteWrapper } from "./../../../../../../jerakine/network/utils/BooleanByteWrapper";

export class AllianceSummaryRequestMessage extends PaginationRequestAbstractMessage
{

	public static readonly protocolId: number = 4007;

	public filterType: number = 0;
	public textFilter: string = "";
	public hideFullFilter: boolean = false;
	public followingAllianceCriteria: boolean = false;
	public criterionFilter: Array<number>;
	public sortType: number = 0;
	public sortDescending: boolean = false;
	public languagesFilter: Array<number>;
	public recruitmentTypeFilter: Array<number>;
	public minPlayerLevelFilter: number = 0;
	public maxPlayerLevelFilter: number = 0;

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
        this.deserializeAs_AllianceSummaryRequestMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.hideFullFilter = BooleanByteWrapper.getFlag(_box0,0);
        this.followingAllianceCriteria = BooleanByteWrapper.getFlag(_box0,1);
        this.sortDescending = BooleanByteWrapper.getFlag(_box0,2);
    }

    private deserializeAs_AllianceSummaryRequestMessage(input: ICustomDataInput)
    {
        let _val5: number = 0;
        let _val8: number = 0;
        let _val9: number = 0;
        super.deserialize(input);
        this.deserializeByteBoxes(input);
        this._filterTypeFunc(input);
        this._textFilterFunc(input);
        let _criterionFilterLen: number = input.readUnsignedShort();
        for(let _i5: number = 0; _i5 < _criterionFilterLen; _i5++)
        {
            _val5 = input.readVarUhInt();
            if(_val5 < 0)
            {
                throw new Error("Forbidden value (" + _val5 + ") on elements of criterionFilter.");
            }
            this.criterionFilter.push(_val5);
        }
        this._sortTypeFunc(input);
        let _languagesFilterLen: number = input.readUnsignedShort();
        for(let _i8: number = 0; _i8 < _languagesFilterLen; _i8++)
        {
            _val8 = input.readVarUhInt();
            if(_val8 < 0)
            {
                throw new Error("Forbidden value (" + _val8 + ") on elements of languagesFilter.");
            }
            this.languagesFilter.push(_val8);
        }
        let _recruitmentTypeFilterLen: number = input.readUnsignedShort();
        for(let _i9: number = 0; _i9 < _recruitmentTypeFilterLen; _i9++)
        {
            _val9 = input.readByte();
            if(_val9 < 0)
            {
                throw new Error("Forbidden value (" + _val9 + ") on elements of recruitmentTypeFilter.");
            }
            this.recruitmentTypeFilter.push(_val9);
        }
        this._minPlayerLevelFilterFunc(input);
        this._maxPlayerLevelFilterFunc(input);
    }

    private _filterTypeFunc(input: ICustomDataInput)
    {
        this.filterType = input.readInt();
    }

    private _textFilterFunc(input: ICustomDataInput)
    {
        this.textFilter = input.readUTF();
    }

    private _sortTypeFunc(input: ICustomDataInput)
    {
        this.sortType = input.readByte();
        if(this.sortType < 0)
        {
            throw new Error("Forbidden value (" + this.sortType + ") on element of AllianceSummaryRequestMessage.sortType.");
        }
    }

    private _minPlayerLevelFilterFunc(input: ICustomDataInput)
    {
        this.minPlayerLevelFilter = input.readShort();
        if(this.minPlayerLevelFilter < 0)
        {
            throw new Error("Forbidden value (" + this.minPlayerLevelFilter + ") on element of AllianceSummaryRequestMessage.minPlayerLevelFilter.");
        }
    }

    private _maxPlayerLevelFilterFunc(input: ICustomDataInput)
    {
        this.maxPlayerLevelFilter = input.readShort();
        if(this.maxPlayerLevelFilter < 0)
        {
            throw new Error("Forbidden value (" + this.maxPlayerLevelFilter + ") on element of AllianceSummaryRequestMessage.maxPlayerLevelFilter.");
        }
    }

}