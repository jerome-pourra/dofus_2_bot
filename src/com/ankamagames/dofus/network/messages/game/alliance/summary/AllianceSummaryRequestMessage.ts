import { PaginationRequestAbstractMessage } from "./../../PaginationRequestAbstractMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { BooleanByteWrapper } from "./../../../../../../jerakine/network/utils/BooleanByteWrapper";

export class AllianceSummaryRequestMessage extends PaginationRequestAbstractMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4007;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

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

    public getMessageId()
    {
        return AllianceSummaryRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceSummaryRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceSummaryRequestMessage.endpointServer;
    }

    public initAllianceSummaryRequestMessage(offset: number = 0, count: number = 0, filterType: number = 0, textFilter: string = "", hideFullFilter: boolean = false, followingAllianceCriteria: boolean = false, criterionFilter: Array<number> = null, sortType: number = 0, sortDescending: boolean = false, languagesFilter: Array<number> = null, recruitmentTypeFilter: Array<number> = null, minPlayerLevelFilter: number = 0, maxPlayerLevelFilter: number = 0): AllianceSummaryRequestMessage
    {
        super.initPaginationRequestAbstractMessage(offset,count);
        this.filterType = filterType;
        this.textFilter = textFilter;
        this.hideFullFilter = hideFullFilter;
        this.followingAllianceCriteria = followingAllianceCriteria;
        this.criterionFilter = criterionFilter;
        this.sortType = sortType;
        this.sortDescending = sortDescending;
        this.languagesFilter = languagesFilter;
        this.recruitmentTypeFilter = recruitmentTypeFilter;
        this.minPlayerLevelFilter = minPlayerLevelFilter;
        this.maxPlayerLevelFilter = maxPlayerLevelFilter;
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
        this.serializeAs_AllianceSummaryRequestMessage(output);
    }

    public serializeAs_AllianceSummaryRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_PaginationRequestAbstractMessage(output);
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.hideFullFilter);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.followingAllianceCriteria);
        _box0 = BooleanByteWrapper.setFlag(_box0,2,this.sortDescending);
        output.writeByte(_box0);
        output.writeInt(this.filterType);
        output.writeUTF(this.textFilter);
        output.writeShort(this.criterionFilter.length);
        for(var _i5: number = 0; _i5 < this.criterionFilter.length; _i5++)
        {
            if(this.criterionFilter[_i5] < 0)
            {
                throw new Error("Forbidden value (" + this.criterionFilter[_i5] + ") on element 5 (starting at 1) of criterionFilter.");
            }
            output.writeVarInt(this.criterionFilter[_i5]);
        }
        output.writeByte(this.sortType);
        output.writeShort(this.languagesFilter.length);
        for(var _i8: number = 0; _i8 < this.languagesFilter.length; _i8++)
        {
            if(this.languagesFilter[_i8] < 0)
            {
                throw new Error("Forbidden value (" + this.languagesFilter[_i8] + ") on element 8 (starting at 1) of languagesFilter.");
            }
            output.writeVarInt(this.languagesFilter[_i8]);
        }
        output.writeShort(this.recruitmentTypeFilter.length);
        for(var _i9: number = 0; _i9 < this.recruitmentTypeFilter.length; _i9++)
        {
            output.writeByte(this.recruitmentTypeFilter[_i9]);
        }
        if(this.minPlayerLevelFilter < 0)
        {
            throw new Error("Forbidden value (" + this.minPlayerLevelFilter + ") on element minPlayerLevelFilter.");
        }
        output.writeShort(this.minPlayerLevelFilter);
        if(this.maxPlayerLevelFilter < 0)
        {
            throw new Error("Forbidden value (" + this.maxPlayerLevelFilter + ") on element maxPlayerLevelFilter.");
        }
        output.writeShort(this.maxPlayerLevelFilter);
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