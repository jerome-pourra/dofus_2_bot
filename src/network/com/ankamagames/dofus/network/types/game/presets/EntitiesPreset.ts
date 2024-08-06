import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { Preset } from "./Preset";

export class EntitiesPreset extends Preset implements INetworkType
{

	public static readonly protocolId: number = 6250;

	public iconId: number = 0;
	public entityIds: Array<number>;

    public constructor()
    {
        super();
        this.entityIds = Array<number>();
    }

    public getTypeId()
    {
        return EntitiesPreset.protocolId;
    }

    public initEntitiesPreset(id: number = 0, iconId: number = 0, entityIds: Array<number> = null): EntitiesPreset
    {
        super.initPreset(id);
        this.iconId = iconId;
        this.entityIds = entityIds;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_EntitiesPreset(output);
    }

    public serializeAs_EntitiesPreset(output: ICustomDataOutput)
    {
        super.serializeAs_Preset(output);
        if(this.iconId < 0)
        {
            throw new Error("Forbidden value (" + this.iconId + ") on element iconId.");
        }
        output.writeShort(this.iconId);
        output.writeShort(this.entityIds.length);
        for(var _i2: number = 0; _i2 < this.entityIds.length; _i2++)
        {
            if(this.entityIds[_i2] < 0)
            {
                throw new Error("Forbidden value (" + this.entityIds[_i2] + ") on element 2 (starting at 1) of entityIds.");
            }
            output.writeVarShort(this.entityIds[_i2]);
        }
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