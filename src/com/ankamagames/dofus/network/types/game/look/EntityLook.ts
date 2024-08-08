import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SubEntity } from "./SubEntity";

export class EntityLook implements INetworkType
{

	public static readonly protocolId: number = 6640;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public bonesId: number = 0;
	public skins: Array<number>;
	public indexedColors: Array<number>;
	public scales: Array<number>;
	public subentities: Array<SubEntity>;

    public constructor()
    {
        this.skins = Array<number>();
        this.indexedColors = Array<number>();
        this.scales = Array<number>();
        this.subentities = Array<SubEntity>();
    }

    public getTypeId()
    {
        return EntityLook.protocolId;
    }

    public isEndpointClient()
    {
        return EntityLook.endpointClient;
    }

    public isEndpointServer()
    {
        return EntityLook.endpointServer;
    }

    public initEntityLook(bonesId: number = 0, skins: Array<number> = null, indexedColors: Array<number> = null, scales: Array<number> = null, subentities: Array<SubEntity> = null): EntityLook
    {
        this.bonesId = bonesId;
        this.skins = skins;
        this.indexedColors = indexedColors;
        this.scales = scales;
        this.subentities = subentities;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_EntityLook(output);
    }

    public serializeAs_EntityLook(output: ICustomDataOutput)
    {
        if(this.bonesId < 0)
        {
            throw new Error("Forbidden value (" + this.bonesId + ") on element bonesId.");
        }
        output.writeVarShort(this.bonesId);
        output.writeShort(this.skins.length);
        for(var _i2: number = 0; _i2 < this.skins.length; _i2++)
        {
            if(this.skins[_i2] < 0)
            {
                throw new Error("Forbidden value (" + this.skins[_i2] + ") on element 2 (starting at 1) of skins.");
            }
            output.writeVarShort(this.skins[_i2]);
        }
        output.writeShort(this.indexedColors.length);
        for(var _i3: number = 0; _i3 < this.indexedColors.length; _i3++)
        {
            output.writeInt(this.indexedColors[_i3]);
        }
        output.writeShort(this.scales.length);
        for(var _i4: number = 0; _i4 < this.scales.length; _i4++)
        {
            output.writeVarShort(this.scales[_i4]);
        }
        output.writeShort(this.subentities.length);
        for(var _i5: number = 0; _i5 < this.subentities.length; _i5++)
        {
            (this.subentities[_i5] as SubEntity).serializeAs_SubEntity(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EntityLook(input);
    }

    private deserializeAs_EntityLook(input: ICustomDataInput)
    {
        let _val2: number = 0;
        let _val3: number = 0;
        let _val4: number = 0;
        let _item5: SubEntity;
        this._bonesIdFunc(input);
        let _skinsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _skinsLen; _i2++)
        {
            _val2 = input.readVarUhShort();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of skins.");
            }
            this.skins.push(_val2);
        }
        let _indexedColorsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _indexedColorsLen; _i3++)
        {
            _val3 = input.readInt();
            this.indexedColors.push(_val3);
        }
        let _scalesLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _scalesLen; _i4++)
        {
            _val4 = input.readVarShort();
            this.scales.push(_val4);
        }
        let _subentitiesLen: number = input.readUnsignedShort();
        for(let _i5: number = 0; _i5 < _subentitiesLen; _i5++)
        {
            _item5 = new SubEntity();
            _item5.deserialize(input);
            this.subentities.push(_item5);
        }
    }

    private _bonesIdFunc(input: ICustomDataInput)
    {
        this.bonesId = input.readVarUhShort();
        if(this.bonesId < 0)
        {
            throw new Error("Forbidden value (" + this.bonesId + ") on element of EntityLook.bonesId.");
        }
    }

}