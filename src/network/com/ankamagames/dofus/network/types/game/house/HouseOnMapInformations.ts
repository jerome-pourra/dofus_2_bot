import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { HouseInstanceInformations } from "./HouseInstanceInformations";
import { HouseInformations } from "./HouseInformations";

export class HouseOnMapInformations extends HouseInformations implements INetworkType
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

    public getTypeId()
    {
        return HouseOnMapInformations.protocolId;
    }

    public initHouseOnMapInformations(houseId: number = 0, modelId: number = 0, doorsOnMap: Array<number> = null, houseInstances: Array<HouseInstanceInformations> = null): HouseOnMapInformations
    {
        super.initHouseInformations(houseId,modelId);
        this.doorsOnMap = doorsOnMap;
        this.houseInstances = houseInstances;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HouseOnMapInformations(output);
    }

    public serializeAs_HouseOnMapInformations(output: ICustomDataOutput)
    {
        super.serializeAs_HouseInformations(output);
        output.writeShort(this.doorsOnMap.length);
        for(var _i1: number = 0; _i1 < this.doorsOnMap.length; _i1++)
        {
            if(this.doorsOnMap[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.doorsOnMap[_i1] + ") on element 1 (starting at 1) of doorsOnMap.");
            }
            output.writeInt(this.doorsOnMap[_i1]);
        }
        output.writeShort(this.houseInstances.length);
        for(var _i2: number = 0; _i2 < this.houseInstances.length; _i2++)
        {
            (this.houseInstances[_i2] as HouseInstanceInformations).serializeAs_HouseInstanceInformations(output);
        }
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