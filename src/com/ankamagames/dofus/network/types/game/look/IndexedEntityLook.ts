import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { EntityLook } from "./EntityLook";

export class IndexedEntityLook implements INetworkType
{

	public static readonly protocolId: number = 5735;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public look: EntityLook;
	public index: number = 0;

    public constructor()
    {
        this.look = new EntityLook();
    }

    public getTypeId()
    {
        return IndexedEntityLook.protocolId;
    }

    public isEndpointClient()
    {
        return IndexedEntityLook.endpointClient;
    }

    public isEndpointServer()
    {
        return IndexedEntityLook.endpointServer;
    }

    public initIndexedEntityLook(look: EntityLook = null, index: number = 0): IndexedEntityLook
    {
        this.look = look;
        this.index = index;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_IndexedEntityLook(output);
    }

    public serializeAs_IndexedEntityLook(output: ICustomDataOutput)
    {
        this.look.serializeAs_EntityLook(output);
        if(this.index < 0)
        {
            throw new Error("Forbidden value (" + this.index + ") on element index.");
        }
        output.writeByte(this.index);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IndexedEntityLook(input);
    }

    private deserializeAs_IndexedEntityLook(input: ICustomDataInput)
    {
        this.look = new EntityLook();
        this.look.deserialize(input);
        this._indexFunc(input);
    }

    private _indexFunc(input: ICustomDataInput)
    {
        this.index = input.readByte();
        if(this.index < 0)
        {
            throw new Error("Forbidden value (" + this.index + ") on element of IndexedEntityLook.index.");
        }
    }

}