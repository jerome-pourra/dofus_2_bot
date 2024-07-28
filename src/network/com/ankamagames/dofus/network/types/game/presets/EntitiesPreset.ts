import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { Preset } from "./Preset";

export class EntitiesPreset extends Preset
{

	public static readonly protocolId: number = 6250;

	public iconId: number = 0;
	public entityIds: Array<number>;

    public constructor()
    {
        super();
        this.entityIds = Array<number>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EntitiesPreset(input);
    }

    private deserializeAs_EntitiesPreset(input: ICustomDataInput)
    {
        let _val2: number = 0;
        super.deserialize(input);
        this._iconIdFunc(input);
        let _entityIdsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _entityIdsLen; _i2++)
        {
            _val2 = input.readVarUhShort();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of entityIds.");
            }
            this.entityIds.push(_val2);
        }
    }

    private _iconIdFunc(input: ICustomDataInput)
    {
        this.iconId = input.readShort();
        if(this.iconId < 0)
        {
            throw new Error("Forbidden value (" + this.iconId + ") on element of EntitiesPreset.iconId.");
        }
    }

}