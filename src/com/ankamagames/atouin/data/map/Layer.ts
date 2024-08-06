import { IDataInput } from "../../../../../network/utils/IDataInput";
import { AtouinConstants } from "../../AtouinConstants";
import { Cell } from "./Cell";
import { Map } from "./Map";

export class Layer {

    public static readonly LAYER_GROUND: number = 0;
    public static readonly LAYER_ADDITIONAL_GROUND: number = 1;
    public static readonly LAYER_DECOR: number = 2;
    public static readonly LAYER_ADDITIONAL_DECOR: number = 3;

    public layerId: number;
    public cellsCount: number;
    public cells: Cell[];

    private _map: Map;

    constructor(map: Map) {
        this._map = map;
    }

    public get map(): Map {
        return this._map;
    }

    public fromRaw(raw: IDataInput, mapVersion: number): void {
        let i: number;
        let c: Cell;
        let maxMapCellId: number;
        let endCell: Cell;

        try {
            if (mapVersion >= 9) {
                this.layerId = raw.readByte();
            } else {
                this.layerId = raw.readInt();
            }
            this.cellsCount = raw.readShort();
            this.cells = new Array<Cell>(this.cellsCount);
            if (this.cellsCount > 0) {
                for (i = 0; i < this.cellsCount; i++) {
                    c = new Cell(this);
                    c.fromRaw(raw, mapVersion);
                    this.cells[i] = c;
                }
                maxMapCellId = AtouinConstants.MAP_CELLS_COUNT - 1;
                if (c.cellId < maxMapCellId) {
                    endCell = Cell.createEmptyCell(this, maxMapCellId);
                    this.cells.push(endCell);
                }
            }
        } catch (e) {
            throw e;
        }
    }
}