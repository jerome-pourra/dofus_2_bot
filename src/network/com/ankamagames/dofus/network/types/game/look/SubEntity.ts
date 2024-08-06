import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { EntityLook } from "./EntityLook";

export class SubEntity implements INetworkType
{

	public static readonly protocolId: number = 9491;

	public bindingPointCategory: number = 0;
	public bindingPointIndex: number = 0;
	public subEntityLook: EntityLook;

    public constructor()
    {
        this.subEntityLook = new EntityLook();
    }

    public getTypeId()
    {
        return SubEntity.protocolId;
    }

    public initSubEntity(bindingPointCategory: number = 0, bindingPointIndex: number = 0, subEntityLook: EntityLook = null): SubEntity
    {
        this.bindingPointCategory = bindingPointCategory;
        this.bindingPointIndex = bindingPointIndex;
        this.subEntityLook = subEntityLook;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SubEntity(output);
    }

    public serializeAs_SubEntity(output: ICustomDataOutput)
    {
        output.writeByte(this.bindingPointCategory);
        if(this.bindingPointIndex < 0)
        {
            throw new Error("Forbidden value (" + this.bindingPointIndex + ") on element bindingPointIndex.");
        }
        output.writeByte(this.bindingPointIndex);
        this.subEntityLook.serializeAs_EntityLook(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SubEntity(input);
    }

    private deserializeAs_SubEntity(input: ICustomDataInput)
    {
        this._bindingPointCategoryFunc(input);
        this._bindingPointIndexFunc(input);
        this.subEntityLook = new EntityLook();
        this.subEntityLook.deserialize(input);
    }

    private _bindingPointCategoryFunc(input: ICustomDataInput)
    {
        this.bindingPointCategory = input.readByte();
        if(this.bindingPointCategory < 0)
        {
            throw new Error("Forbidden value (" + this.bindingPointCategory + ") on element of SubEntity.bindingPointCategory.");
        }
    }

    private _bindingPointIndexFunc(input: ICustomDataInput)
    {
        this.bindingPointIndex = input.readByte();
        if(this.bindingPointIndex < 0)
        {
            throw new Error("Forbidden value (" + this.bindingPointIndex + ") on element of SubEntity.bindingPointIndex.");
        }
    }

}