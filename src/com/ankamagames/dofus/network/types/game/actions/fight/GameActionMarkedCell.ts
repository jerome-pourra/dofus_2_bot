import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class GameActionMarkedCell implements INetworkType
{

	public static readonly protocolId: number = 5710;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public cellId: number = 0;
	public zoneSize: number = 0;
	public cellColor: number = 0;
	public cellsType: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return GameActionMarkedCell.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionMarkedCell.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionMarkedCell.endpointServer;
    }

    public initGameActionMarkedCell(cellId: number = 0, zoneSize: number = 0, cellColor: number = 0, cellsType: number = 0): GameActionMarkedCell
    {
        this.cellId = cellId;
        this.zoneSize = zoneSize;
        this.cellColor = cellColor;
        this.cellsType = cellsType;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameActionMarkedCell(output);
    }

    public serializeAs_GameActionMarkedCell(output: ICustomDataOutput)
    {
        if(this.cellId < 0 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
        }
        output.writeVarShort(this.cellId);
        output.writeByte(this.zoneSize);
        output.writeInt(this.cellColor);
        output.writeByte(this.cellsType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionMarkedCell(input);
    }

    private deserializeAs_GameActionMarkedCell(input: ICustomDataInput)
    {
        this._cellIdFunc(input);
        this._zoneSizeFunc(input);
        this._cellColorFunc(input);
        this._cellsTypeFunc(input);
    }

    private _cellIdFunc(input: ICustomDataInput)
    {
        this.cellId = input.readVarUhShort();
        if(this.cellId < 0 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element of GameActionMarkedCell.cellId.");
        }
    }

    private _zoneSizeFunc(input: ICustomDataInput)
    {
        this.zoneSize = input.readByte();
    }

    private _cellColorFunc(input: ICustomDataInput)
    {
        this.cellColor = input.readInt();
    }

    private _cellsTypeFunc(input: ICustomDataInput)
    {
        this.cellsType = input.readByte();
    }

}