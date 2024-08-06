import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class TitlesAndOrnamentsListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3749;

	public titles: Array<number>;
	public ornaments: Array<number>;
	public activeTitle: number = 0;
	public activeOrnament: number = 0;

    public constructor()
    {
        super();
        this.titles = Array<number>();
        this.ornaments = Array<number>();
    }

    public getMessageId()
    {
        return TitlesAndOrnamentsListMessage.protocolId;
    }

    public initTitlesAndOrnamentsListMessage(titles: Array<number> = null, ornaments: Array<number> = null, activeTitle: number = 0, activeOrnament: number = 0): TitlesAndOrnamentsListMessage
    {
        this.titles = titles;
        this.ornaments = ornaments;
        this.activeTitle = activeTitle;
        this.activeOrnament = activeOrnament;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TitlesAndOrnamentsListMessage(output);
    }

    public serializeAs_TitlesAndOrnamentsListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.titles.length);
        for(var _i1: number = 0; _i1 < this.titles.length; _i1++)
        {
            if(this.titles[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.titles[_i1] + ") on element 1 (starting at 1) of titles.");
            }
            output.writeVarShort(this.titles[_i1]);
        }
        output.writeShort(this.ornaments.length);
        for(var _i2: number = 0; _i2 < this.ornaments.length; _i2++)
        {
            if(this.ornaments[_i2] < 0)
            {
                throw new Error("Forbidden value (" + this.ornaments[_i2] + ") on element 2 (starting at 1) of ornaments.");
            }
            output.writeVarShort(this.ornaments[_i2]);
        }
        if(this.activeTitle < 0)
        {
            throw new Error("Forbidden value (" + this.activeTitle + ") on element activeTitle.");
        }
        output.writeVarShort(this.activeTitle);
        if(this.activeOrnament < 0)
        {
            throw new Error("Forbidden value (" + this.activeOrnament + ") on element activeOrnament.");
        }
        output.writeVarShort(this.activeOrnament);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TitlesAndOrnamentsListMessage(input);
    }

    private deserializeAs_TitlesAndOrnamentsListMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _val2: number = 0;
        let _titlesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _titlesLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of titles.");
            }
            this.titles.push(_val1);
        }
        let _ornamentsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _ornamentsLen; _i2++)
        {
            _val2 = input.readVarUhShort();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of ornaments.");
            }
            this.ornaments.push(_val2);
        }
        this._activeTitleFunc(input);
        this._activeOrnamentFunc(input);
    }

    private _activeTitleFunc(input: ICustomDataInput)
    {
        this.activeTitle = input.readVarUhShort();
        if(this.activeTitle < 0)
        {
            throw new Error("Forbidden value (" + this.activeTitle + ") on element of TitlesAndOrnamentsListMessage.activeTitle.");
        }
    }

    private _activeOrnamentFunc(input: ICustomDataInput)
    {
        this.activeOrnament = input.readVarUhShort();
        if(this.activeOrnament < 0)
        {
            throw new Error("Forbidden value (" + this.activeOrnament + ") on element of TitlesAndOrnamentsListMessage.activeOrnament.");
        }
    }

}