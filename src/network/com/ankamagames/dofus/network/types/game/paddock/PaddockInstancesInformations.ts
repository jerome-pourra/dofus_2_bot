import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { PaddockBuyableInformations } from "./PaddockBuyableInformations";
import { PaddockInformations } from "./PaddockInformations";

export class PaddockInstancesInformations extends PaddockInformations
{

	public static readonly protocolId: number = 4571;

	public paddocks: Array<PaddockBuyableInformations>;

    public constructor()
    {
        super();
        this.paddocks = Array<PaddockBuyableInformations>();
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