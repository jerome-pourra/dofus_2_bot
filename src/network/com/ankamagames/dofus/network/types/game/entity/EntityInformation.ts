import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class EntityInformation implements INetworkType
{

	public static readonly protocolId: number = 9779;

	public id: number = 0;
	public experience: number = 0;
	public status: boolean = false;

    public constructor()
    {

    }

    public getTypeId()
    {
        return EntityInformation.protocolId;
    }

    public initEntityInformation(id: number = 0, experience: number = 0, status: boolean = false): EntityInformation
    {
        this.id = id;
        this.experience = experience;
        this.status = status;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_EntityInformation(output);
    }

    public serializeAs_EntityInformation(output: ICustomDataOutput)
    {
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarShort(this.id);
        if(this.experience < 0)
        {
            throw new Error("Forbidden value (" + this.experience + ") on element experience.");
        }
        output.writeVarInt(this.experience);
        output.writeBoolean(this.status);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EntityInformation(input);
    }

    private deserializeAs_EntityInformation(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._experienceFunc(input);
        this._statusFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhShort();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of EntityInformation.id.");
        }
    }

    private _experienceFunc(input: ICustomDataInput)
    {
        this.experience = input.readVarUhInt();
        if(this.experience < 0)
        {
            throw new Error("Forbidden value (" + this.experience + ") on element of EntityInformation.experience.");
        }
    }

    private _statusFunc(input: ICustomDataInput)
    {
        this.status = input.readBoolean();
    }

}