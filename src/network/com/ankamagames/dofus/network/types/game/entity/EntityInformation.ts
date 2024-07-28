import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class EntityInformation
{

	public static readonly protocolId: number = 9779;

	public id: number = 0;
	public experience: number = 0;
	public status: boolean = false;

    public constructor()
    {

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