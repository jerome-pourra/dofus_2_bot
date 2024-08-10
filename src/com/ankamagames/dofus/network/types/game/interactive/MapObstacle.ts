import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class MapObstacle implements INetworkType
{

	public static readonly protocolId: number = 9518;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public obstacleCellId: number = 0;
	public state: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return MapObstacle.protocolId;
    }

    public isEndpointClient()
    {
        return MapObstacle.endpointClient;
    }

    public isEndpointServer()
    {
        return MapObstacle.endpointServer;
    }

    public initMapObstacle(obstacleCellId: number = 0, state: number = 0): MapObstacle
    {
        this.obstacleCellId = obstacleCellId;
        this.state = state;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_MapObstacle(output);
    }

    public serializeAs_MapObstacle(output: ICustomDataOutput)
    {
        if(this.obstacleCellId < 0 || this.obstacleCellId > 559)
        {
            throw new Error("Forbidden value (" + this.obstacleCellId + ") on element obstacleCellId.");
        }
        output.writeVarShort(this.obstacleCellId);
        output.writeByte(this.state);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapObstacle(input);
    }

    private deserializeAs_MapObstacle(input: ICustomDataInput)
    {
        this._obstacleCellIdFunc(input);
        this._stateFunc(input);
    }

    private _obstacleCellIdFunc(input: ICustomDataInput)
    {
        this.obstacleCellId = input.readVarUhShort();
        if(this.obstacleCellId < 0 || this.obstacleCellId > 559)
        {
            throw new Error("Forbidden value (" + this.obstacleCellId + ") on element of MapObstacle.obstacleCellId.");
        }
    }

    private _stateFunc(input: ICustomDataInput)
    {
        this.state = input.readByte();
        if(this.state < 0)
        {
            throw new Error("Forbidden value (" + this.state + ") on element of MapObstacle.state.");
        }
    }

}