import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class HouseInformations implements INetworkType
{

	public static readonly protocolId: number = 2374;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public houseId: number = 0;
	public modelId: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return HouseInformations.protocolId;
    }

    public isEndpointClient()
    {
        return HouseInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return HouseInformations.endpointServer;
    }

    public initHouseInformations(houseId: number = 0, modelId: number = 0): HouseInformations
    {
        this.houseId = houseId;
        this.modelId = modelId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HouseInformations(output);
    }

    public serializeAs_HouseInformations(output: ICustomDataOutput)
    {
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
        }
        output.writeVarInt(this.houseId);
        if(this.modelId < 0)
        {
            throw new Error("Forbidden value (" + this.modelId + ") on element modelId.");
        }
        output.writeVarShort(this.modelId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseInformations(input);
    }

    private deserializeAs_HouseInformations(input: ICustomDataInput)
    {
        this._houseIdFunc(input);
        this._modelIdFunc(input);
    }

    private _houseIdFunc(input: ICustomDataInput)
    {
        this.houseId = input.readVarUhInt();
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element of HouseInformations.houseId.");
        }
    }

    private _modelIdFunc(input: ICustomDataInput)
    {
        this.modelId = input.readVarUhShort();
        if(this.modelId < 0)
        {
            throw new Error("Forbidden value (" + this.modelId + ") on element of HouseInformations.modelId.");
        }
    }

}