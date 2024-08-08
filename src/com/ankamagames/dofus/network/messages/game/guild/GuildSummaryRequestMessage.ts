import { PaginationRequestAbstractMessage } from "./../PaginationRequestAbstractMessage";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";

export class GuildSummaryRequestMessage extends PaginationRequestAbstractMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1163;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

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

    public getMessageId()
    {
        return GuildSummaryRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildSummaryRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildSummaryRequestMessage.endpointServer;
    }

    public initGuildSummaryRequestMessage(offset: number = 0, count: number = 0, nameFilter: string = "", hideFullFilter: boolean = false, followingGuildCriteria: boolean = false, criterionFilter: Array<number> = null, languagesFilter: Array<number> = null, recruitmentTypeFilter: Array<number> = null, minLevelFilter: number = 0, maxLevelFilter: number = 0, minPlayerLevelFilter: number = 0, maxPlayerLevelFilter: number = 0, minSuccessFilter: number = 0, maxSuccessFilter: number = 0, sortType: number = 0, sortDescending: boolean = false): GuildSummaryRequestMessage
    {
        super.initPaginationRequestAbstractMessage(offset,count);
        this.nameFilter = nameFilter;
        this.hideFullFilter = hideFullFilter;
        this.followingGuildCriteria = followingGuildCriteria;
        this.criterionFilter = criterionFilter;
        this.languagesFilter = languagesFilter;
        this.recruitmentTypeFilter = recruitmentTypeFilter;
        this.minLevelFilter = minLevelFilter;
        this.maxLevelFilter = maxLevelFilter;
        this.minPlayerLevelFilter = minPlayerLevelFilter;
        this.maxPlayerLevelFilter = maxPlayerLevelFilter;
        this.minSuccessFilter = minSuccessFilter;
        this.maxSuccessFilter = maxSuccessFilter;
        this.sortType = sortType;
        this.sortDescending = sortDescending;
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
        this.serializeAs_GuildSummaryRequestMessage(output);
    }

    public serializeAs_GuildSummaryRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_PaginationRequestAbstractMessage(output);
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.hideFullFilter);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.followingGuildCriteria);
        _box0 = BooleanByteWrapper.setFlag(_box0,2,this.sortDescending);
        output.writeByte(_box0);
        output.writeUTF(this.nameFilter);
        output.writeShort(this.criterionFilter.length);
        for(var _i4: number = 0; _i4 < this.criterionFilter.length; _i4++)
        {
            if(this.criterionFilter[_i4] < 0)
            {
                throw new Error("Forbidden value (" + this.criterionFilter[_i4] + ") on element 4 (starting at 1) of criterionFilter.");
            }
            output.writeVarInt(this.criterionFilter[_i4]);
        }
        output.writeShort(this.languagesFilter.length);
        for(var _i5: number = 0; _i5 < this.languagesFilter.length; _i5++)
        {
            if(this.languagesFilter[_i5] < 0)
            {
                throw new Error("Forbidden value (" + this.languagesFilter[_i5] + ") on element 5 (starting at 1) of languagesFilter.");
            }
            output.writeVarInt(this.languagesFilter[_i5]);
        }
        output.writeShort(this.recruitmentTypeFilter.length);
        for(var _i6: number = 0; _i6 < this.recruitmentTypeFilter.length; _i6++)
        {
            output.writeByte(this.recruitmentTypeFilter[_i6]);
        }
        if(this.minLevelFilter < 0)
        {
            throw new Error("Forbidden value (" + this.minLevelFilter + ") on element minLevelFilter.");
        }
        output.writeShort(this.minLevelFilter);
        if(this.maxLevelFilter < 0)
        {
            throw new Error("Forbidden value (" + this.maxLevelFilter + ") on element maxLevelFilter.");
        }
        output.writeShort(this.maxLevelFilter);
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
        if(this.minSuccessFilter < 0)
        {
            throw new Error("Forbidden value (" + this.minSuccessFilter + ") on element minSuccessFilter.");
        }
        output.writeVarInt(this.minSuccessFilter);
        if(this.maxSuccessFilter < 0)
        {
            throw new Error("Forbidden value (" + this.maxSuccessFilter + ") on element maxSuccessFilter.");
        }
        output.writeVarInt(this.maxSuccessFilter);
        output.writeByte(this.sortType);
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