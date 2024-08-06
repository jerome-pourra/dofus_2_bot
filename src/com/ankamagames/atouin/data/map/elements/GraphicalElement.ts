import { IDataInput } from "../../../../../../network/utils/IDataInput";
import { AtouinConstants } from "../../../AtouinConstants";
import { ElementTypesEnum } from "../../../enums/ElementTypesEnum";
import { Point } from "../../../utils/Point";
import { Cell } from "../Cell";
import { BasicElement } from "./BasicElement";

export class GraphicalElement extends BasicElement {

    public elementId: number;
    public finalTeint: any;
    public pixelOffset: Point;
    public altitude: number;
    public identifier: number;

    constructor(cell: Cell) {
        super(cell);
    }

    get elementType(): number {
        return ElementTypesEnum.GRAPHICAL;
    }

    public get colorMultiplicator(): any {
        return this.finalTeint;
    }

    public calculateFinalTeint(rHue: number, gHue: number, bHue: number, rShadow: number, gShadow: number, bShadow: number): void {
        // const r: number = ColorMultiplicator.clamp((rHue + rShadow + 128) * 2, 0, 512);
        // const g: number = ColorMultiplicator.clamp((gHue + gShadow + 128) * 2, 0, 512);
        // const b: number = ColorMultiplicator.clamp((bHue + bShadow + 128) * 2, 0, 512);
        // this.finalTeint = new ColorMultiplicator(r, g, b, true);
    }

    public fromRaw(raw: IDataInput, mapVersion: number): void {
        this.subFromRaw(raw, mapVersion);
        this.identifier = raw.readUnsignedInt();
    }

    public subFromRaw(raw: IDataInput, mapVersion: number): void {
        this.elementId = raw.readUnsignedInt();
        this.calculateFinalTeint(raw.readByte(), raw.readByte(), raw.readByte(), raw.readByte(), raw.readByte(), raw.readByte());
        this.pixelOffset = new Point();
        if (mapVersion <= 4) {
            this.pixelOffset.x = raw.readByte() * AtouinConstants.CELL_HALF_WIDTH;
            this.pixelOffset.y = raw.readByte() * AtouinConstants.CELL_HALF_HEIGHT;
        } else {
            this.pixelOffset.x = raw.readShort();
            this.pixelOffset.y = raw.readShort();
        }
        this.altitude = raw.readByte();
    }
}