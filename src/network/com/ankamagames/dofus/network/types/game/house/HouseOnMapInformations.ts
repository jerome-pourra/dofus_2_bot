import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { HouseInstanceInformations } from "./HouseInstanceInformations";
import { HouseInformations } from "./HouseInformations";

export class HouseOnMapInformations extends HouseInformations
{

	public static readonly protocolId: number = 5255;

	public doorsOnMap: Array<number>;
	public houseInstances: Array<HouseInstanceInformations>;

    public constructor()
    {
        super();
        this.doorsOnMap = Array<number>();
        this.houseInstances = Array<HouseInstanceInformations>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseOnMapInformations(input);
    }

    private deserializeAs_HouseOnMapInformations(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _item2: HouseInstanceInformations;
        super.deserialize(input);
        let _doorsOnMapLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _doorsOnMapLen; _i1++)
        {
            _val1 = input.readInt();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of doorsOnMap.");
            }
            this.doorsOnMap.push(_val1);
        }
        let _houseInstancesLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _houseInstancesLen; _i2++)
        {
            _item2 = new HouseInstanceInformations();
            _item2.deserialize(input);
            this.houseInstances.push(_item2);
        }
    }

}