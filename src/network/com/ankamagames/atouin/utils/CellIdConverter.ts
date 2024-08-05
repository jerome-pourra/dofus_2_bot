import { AtouinConstants } from "../AtouinConstants";
import { Point } from "./Point";

export class CellIdConverter {
    public static CELLPOS: Point[] = new Array();
    private static _bInit: boolean = false;

    constructor() {}

    private static init(): void {
        let b: number = 0;
        this._bInit = true;
        let startX: number = 0;
        let startY: number = 0;
        let cell: number = 0;
        for (let a: number = 0; a < AtouinConstants.MAP_HEIGHT; a++) {
            for (b = 0; b < AtouinConstants.MAP_WIDTH; b++) {
                this.CELLPOS[cell] = new Point(startX + b, startY + b);
                cell++;
            }
            startX++;
            for (b = 0; b < AtouinConstants.MAP_WIDTH; b++) {
                this.CELLPOS[cell] = new Point(startX + b, startY + b);
                cell++;
            }
            startY--;
        }
    }

    public static coordToCellId(x: number, y: number): number {
        if (!this._bInit) {
            this.init();
        }
        return (x - y) * AtouinConstants.MAP_WIDTH + y + Math.floor((x - y) / 2);
    }

    public static cellIdToCoord(cellId: number): Point | null {
        if (!this._bInit) {
            this.init();
        }
        if (!this.CELLPOS[cellId]) {
            return null;
        }
        return this.CELLPOS[cellId];
    }
}