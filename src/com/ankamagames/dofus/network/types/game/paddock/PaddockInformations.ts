import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class PaddockInformations implements INetworkType
{

	public static readonly protocolId: number = 208;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public maxOutdoorMount: number = 0;
	public maxItems: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return PaddockInformations.protocolId;
    }

    public isEndpointClient()
    {
        return PaddockInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return PaddockInformations.endpointServer;
    }

    public initPaddockInformations(maxOutdoorMount: number = 0, maxItems: number = 0): PaddockInformations
    {
        this.maxOutdoorMount = maxOutdoorMount;
        this.maxItems = maxItems;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PaddockInformations(output);
    }

    public serializeAs_PaddockInformations(output: ICustomDataOutput)
    {
        if(this.maxOutdoorMount < 0)
        {
            throw new Error("Forbidden value (" + this.maxOutdoorMount + ") on element maxOutdoorMount.");
        }
        output.writeVarShort(this.maxOutdoorMount);
        if(this.maxItems < 0)
        {
            throw new Error("Forbidden value (" + this.maxItems + ") on element maxItems.");
        }
        output.writeVarShort(this.maxItems);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaddockInformations(input);
    }

    private deserializeAs_PaddockInformations(input: ICustomDataInput)
    {
        this._maxOutdoorMountFunc(input);
        this._maxItemsFunc(input);
    }

    private _maxOutdoorMountFunc(input: ICustomDataInput)
    {
        this.maxOutdoorMount = input.readVarUhShort();
        if(this.maxOutdoorMount < 0)
        {
            throw new Error("Forbidden value (" + this.maxOutdoorMount + ") on element of PaddockInformations.maxOutdoorMount.");
        }
    }

    private _maxItemsFunc(input: ICustomDataInput)
    {
        this.maxItems = input.readVarUhShort();
        if(this.maxItems < 0)
        {
            throw new Error("Forbidden value (" + this.maxItems + ") on element of PaddockInformations.maxItems.");
        }
    }

}