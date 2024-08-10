import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { PaddockBuyableInformations } from "./PaddockBuyableInformations";
import { PaddockInformations } from "./PaddockInformations";

export class PaddockInstancesInformations extends PaddockInformations implements INetworkType
{

	public static readonly protocolId: number = 4571;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public paddocks: Array<PaddockBuyableInformations>;

    public constructor()
    {
        super();
        this.paddocks = Array<PaddockBuyableInformations>();
    }

    public getTypeId()
    {
        return PaddockInstancesInformations.protocolId;
    }

    public isEndpointClient()
    {
        return PaddockInstancesInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return PaddockInstancesInformations.endpointServer;
    }

    public initPaddockInstancesInformations(maxOutdoorMount: number = 0, maxItems: number = 0, paddocks: Array<PaddockBuyableInformations> = null): PaddockInstancesInformations
    {
        super.initPaddockInformations(maxOutdoorMount,maxItems);
        this.paddocks = paddocks;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PaddockInstancesInformations(output);
    }

    public serializeAs_PaddockInstancesInformations(output: ICustomDataOutput)
    {
        super.serializeAs_PaddockInformations(output);
        output.writeShort(this.paddocks.length);
        for(var _i1: number = 0; _i1 < this.paddocks.length; _i1++)
        {
            output.writeShort((this.paddocks[_i1] as PaddockBuyableInformations).getTypeId());
            (this.paddocks[_i1] as PaddockBuyableInformations).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaddockInstancesInformations(input);
    }

    private deserializeAs_PaddockInstancesInformations(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: PaddockBuyableInformations;
        super.deserialize(input);
        let _paddocksLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _paddocksLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(PaddockBuyableInformations,_id1);
            _item1.deserialize(input);
            this.paddocks.push(_item1);
        }
    }

}