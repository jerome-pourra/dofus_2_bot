import { Point } from "./utils/Point";

export class AtouinConstants {

    public static readonly DEBUG_FILES_PARSING: Boolean = false;

    public static readonly DEBUG_FILES_PARSING_ELEMENTS: Boolean = false;

    public static readonly MAP_WIDTH: number = 14;

    public static readonly MAP_HEIGHT: number = 20;

    public static readonly MAP_CELLS_COUNT: number = 560;

    public static readonly ADJACENT_CELL_LEFT_MARGIN: number = 5;

    public static readonly ADJACENT_CELL_RIGHT_MARGIN: number = 5;

    public static readonly CELL_WIDTH: number = 86;

    public static readonly CELL_HALF_WIDTH: number = 43;

    public static readonly CELL_HEIGHT: number = 43;

    public static readonly CELL_HALF_HEIGHT: number = 21.5;

    public static readonly ALTITUDE_PIXEL_UNIT: number = 10;

    public static readonly LOADERS_POOL_INITIAL_SIZE: number = 30;

    public static readonly LOADERS_POOL_GROW_SIZE: number = 5;

    public static readonly LOADERS_POOL_WARN_LIMIT: number = 100;

    public static readonly OVERLAY_MODE_ALPHA: number = 0.7;

    public static readonly MAX_ZOOM: number = 4;

    public static readonly MAX_GROUND_CACHE_MEMORY: number = 5;

    public static readonly GROUND_MAP_VERSION: number = 2;

    public static readonly MIN_DISK_SPACE_AVAILABLE: number = Math.pow(2, 20) * 512;

    public static readonly PSEUDO_INFINITE: number = 63;

    public static readonly PATHFINDER_MIN_X: number = 0;

    public static readonly PATHFINDER_MAX_X: number = 33 + 1;

    public static readonly PATHFINDER_MIN_Y: number = -19;

    public static readonly PATHFINDER_MAX_Y: number = 13 + 1;

    public static readonly VIEW_DETECT_CELL_WIDTH: number = 2 * AtouinConstants.CELL_WIDTH;

    public static readonly MIN_MAP_X: number = -255;

    public static readonly MAX_MAP_X: number = 255;

    public static readonly MIN_MAP_Y: number = -255;

    public static readonly MAX_MAP_Y: number = 255;

    public static readonly RESOLUTION_HIGH_QUALITY: Point = new Point(1978, 1024);

    public static readonly RESOLUTION_MEDIUM_QUALITY: Point = new Point(1483.5, 768);

    public static readonly RESOLUTION_LOW_QUALITY: Point = new Point(989, 512);

    public static readonly MOVEMENT_WALK: number = 1;

    public static readonly MOVEMENT_NORMAL: number = 2;

    public static WIDESCREEN_BITMAP_WIDTH: number = 0;

}