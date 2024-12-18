import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class EntityDispositionInformations implements INetworkType
{

	public static readonly protocolId: number = 2447;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public cellId: number = 0;
	public direction: number = 1;

    public constructor()
    {

    }

    public getTypeId()
    {
        return EntityDispositionInformations.protocolId;
    }

    public isEndpointClient()
    {
        return EntityDispositionInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return EntityDispositionInformations.endpointServer;
    }

    public initEntityDispositionInformations(cellId: number = 0, direction: number = 1): EntityDispositionInformations
    {
        this.cellId = cellId;
        this.direction = direction;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_EntityDispositionInformations(output);
    }

    public serializeAs_EntityDispositionInformations(output: ICustomDataOutput)
    {
        if(this.cellId < -1 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
        }
        output.writeShort(this.cellId);
        output.writeByte(this.direction);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EntityDispositionInformations(input);
    }

    private deserializeAs_EntityDispositionInformations(input: ICustomDataInput)
    {
        this._cellIdFunc(input);
        this._directionFunc(input);
    }

    private _cellIdFunc(input: ICustomDataInput)
    {
        this.cellId = input.readShort();
        if(this.cellId < -1 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element of EntityDispositionInformations.cellId.");
        }
    }

    private _directionFunc(input: ICustomDataInput)
    {
        this.direction = input.readByte();
        if(this.direction < 0)
        {
            throw new Error("Forbidden value (" + this.direction + ") on element of EntityDispositionInformations.direction.");
        }
    }

}