import { CustomBuffer } from "../../../../../../CustomBuffer";
import { ElementTypesEnum } from "../../../enums/ElementTypesEnum";
import { Cell } from "../Cell";

export class BasicElement {
    
    private _cell: Cell;
    
    constructor(cell: Cell) {
        this._cell = cell;
    }

    public get cell(): Cell {
        return this._cell;
    }

    public get elementType(): number {
        return -1;
    }

    public fromRaw(raw: CustomBuffer, mapVersion: number): void {
        throw new Error("Cette méthode doit être surchargée !");
    }
}