import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SubEntity } from "./SubEntity";

export class EntityLook
{

	public static readonly protocolId: number = 6640;

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