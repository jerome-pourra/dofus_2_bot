import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameActionMarkedCell } from "./GameActionMarkedCell";

export class GameActionMark implements INetworkType
{

	public static readonly protocolId: number = 8022;

	public markAuthorId: number = 0;
	public markTeamId: number = 2;
	public markSpellId: number = 0;
	public markSpellLevel: number = 0;
	public markId: number = 0;
	public markType: number = 0;
	public markimpactCell: number = 0;
	public cells: Array<GameActionMarkedCell>;
	public active: boolean = false;

    public constructor()
    {
        this.cells = Array<GameActionMarkedCell>();
    }

    public getTypeId()
    {
        return GameActionMark.protocolId;
    }

    public initGameActionMark(markAuthorId: number = 0, markTeamId: number = 2, markSpellId: number = 0, markSpellLevel: number = 0, markId: number = 0, markType: number = 0, markimpactCell: number = 0, cells: Array<GameActionMarkedCell> = null, active: boolean = false): GameActionMark
    {
        this.markAuthorId = markAuthorId;
        this.markTeamId = markTeamId;
        this.markSpellId = markSpellId;
        this.markSpellLevel = markSpellLevel;
        this.markId = markId;
        this.markType = markType;
        this.markimpactCell = markimpactCell;
        this.cells = cells;
        this.active = active;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameActionMark(output);
    }

    public serializeAs_GameActionMark(output: ICustomDataOutput)
    {
        if(this.markAuthorId < -9007199254740992 || this.markAuthorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.markAuthorId + ") on element markAuthorId.");
        }
        output.writeDouble(this.markAuthorId);
        output.writeByte(this.markTeamId);
        if(this.markSpellId < 0)
        {
            throw new Error("Forbidden value (" + this.markSpellId + ") on element markSpellId.");
        }
        output.writeInt(this.markSpellId);
        if(this.markSpellLevel < 1 || this.markSpellLevel > 32767)
        {
            throw new Error("Forbidden value (" + this.markSpellLevel + ") on element markSpellLevel.");
        }
        output.writeShort(this.markSpellLevel);
        output.writeShort(this.markId);
        output.writeByte(this.markType);
        if(this.markimpactCell < -1 || this.markimpactCell > 559)
        {
            throw new Error("Forbidden value (" + this.markimpactCell + ") on element markimpactCell.");
        }
        output.writeShort(this.markimpactCell);
        output.writeShort(this.cells.length);
        for(var _i8: number = 0; _i8 < this.cells.length; _i8++)
        {
            (this.cells[_i8] as GameActionMarkedCell).serializeAs_GameActionMarkedCell(output);
        }
        output.writeBoolean(this.active);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionMark(input);
    }

    private deserializeAs_GameActionMark(input: ICustomDataInput)
    {
        let _item8: GameActionMarkedCell;
        this._markAuthorIdFunc(input);
        this._markTeamIdFunc(input);
        this._markSpellIdFunc(input);
        this._markSpellLevelFunc(input);
        this._markIdFunc(input);
        this._markTypeFunc(input);
        this._markimpactCellFunc(input);
        let _cellsLen: number = input.readUnsignedShort();
        for(let _i8: number = 0; _i8 < _cellsLen; _i8++)
        {
            _item8 = new GameActionMarkedCell();
            _item8.deserialize(input);
            this.cells.push(_item8);
        }
        this._activeFunc(input);
    }

    private _markAuthorIdFunc(input: ICustomDataInput)
    {
        this.markAuthorId = input.readDouble();
        if(this.markAuthorId < -9007199254740992 || this.markAuthorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.markAuthorId + ") on element of GameActionMark.markAuthorId.");
        }
    }

    private _markTeamIdFunc(input: ICustomDataInput)
    {
        this.markTeamId = input.readByte();
        if(this.markTeamId < 0)
        {
            throw new Error("Forbidden value (" + this.markTeamId + ") on element of GameActionMark.markTeamId.");
        }
    }

    private _markSpellIdFunc(input: ICustomDataInput)
    {
        this.markSpellId = input.readInt();
        if(this.markSpellId < 0)
        {
            throw new Error("Forbidden value (" + this.markSpellId + ") on element of GameActionMark.markSpellId.");
        }
    }

    private _markSpellLevelFunc(input: ICustomDataInput)
    {
        this.markSpellLevel = input.readShort();
        if(this.markSpellLevel < 1 || this.markSpellLevel > 32767)
        {
            throw new Error("Forbidden value (" + this.markSpellLevel + ") on element of GameActionMark.markSpellLevel.");
        }
    }

    private _markIdFunc(input: ICustomDataInput)
    {
        this.markId = input.readShort();
    }

    private _markTypeFunc(input: ICustomDataInput)
    {
        this.markType = input.readByte();
    }

    private _markimpactCellFunc(input: ICustomDataInput)
    {
        this.markimpactCell = input.readShort();
        if(this.markimpactCell < -1 || this.markimpactCell > 559)
        {
            throw new Error("Forbidden value (" + this.markimpactCell + ") on element of GameActionMark.markimpactCell.");
        }
    }

    private _activeFunc(input: ICustomDataInput)
    {
        this.active = input.readBoolean();
    }

}