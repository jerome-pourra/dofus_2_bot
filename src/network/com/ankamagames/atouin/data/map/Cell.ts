import { Point } from '../../utils/Point';
import { Layer } from './Layer';
import { AtouinConstants } from '../../AtouinConstants';
import { CellIdConverter } from '../../utils/CellIdConverter';
import { BasicElement } from './elements/BasicElement';
import { ElementTypesEnum } from '../../enums/ElementTypesEnum';
import { GraphicalElement } from './elements/GraphicalElement';
import { IDataInput } from '../../../../../utils/IDataInput';

export class Cell {

    private static _cellCoords: Point;

    public cellId: number;
    public elementsCount: number;
    public elements: BasicElement[];

    private _layer: Layer;

    constructor(layer: Layer) {
        this._layer = layer;
    }

    public static cellCoords(cellId: number): Point {
        if (Cell._cellCoords == null) {
            Cell._cellCoords = new Point();
        }
        Cell._cellCoords.x = cellId % AtouinConstants.MAP_WIDTH;
        Cell._cellCoords.y = Math.floor(cellId / AtouinConstants.MAP_WIDTH);
        return Cell._cellCoords;
    }

    public static cellId(p: Point): number {
        return CellIdConverter.coordToCellId(p.x, p.y);
    }

    public static cellIdByXY(x: number, y: number): number {
        return CellIdConverter.coordToCellId(x, y);
    }

    public static cellPixelCoords(cellId: number): Point {
        const p: Point = Cell.cellCoords(cellId);
        p.x = p.x * AtouinConstants.CELL_WIDTH + (p.y % 2 === 1 ? AtouinConstants.CELL_HALF_WIDTH : 0);
        p.y *= AtouinConstants.CELL_HALF_HEIGHT;
        return p;
    }

    public static createEmptyCell(layer: Layer, cellId: number): Cell {
        const cell = new Cell(layer);
        cell.cellId = cellId;
        cell.elementsCount = 0;
        cell.elements = [];
        return cell;
    }

    public get layer(): Layer {
        return this._layer;
    }

    public get coords(): Point {
        return CellIdConverter.cellIdToCoord(this.cellId);
    }

    public get pixelCoords(): Point {
        return Cell.cellPixelCoords(this.cellId);
    }

    public fromRaw(raw: IDataInput, mapVersion: number): void {
        let beType: number;
        let be: BasicElement;
        let i: number;
        try {
            this.cellId = raw.readShort();
            this.elementsCount = raw.readShort();
            this.elements = new Array<BasicElement>(this.elementsCount);
            for (i = 0; i < this.elementsCount; i++) {
                beType = raw.readByte();
                switch (beType) {
                    case ElementTypesEnum.GRAPHICAL:
                        be = new GraphicalElement(this);
                        break;
                    case ElementTypesEnum.SOUND:
                        throw new Error("Les éléments de type son ne sont pas encore supportés !");
                        // return new SoundElement(cell);
                    default:
                        throw new Error(`Un élément de type inconnu ${beType} a été trouvé sur la cellule ${this.cellId}!`);
                }
                be.fromRaw(raw, mapVersion);
                this.elements[i] = be;
            }
        } catch (e) {
            throw e;
        }
    }
}