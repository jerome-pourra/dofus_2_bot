import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class KohAllianceRoleMembers
{

	public static readonly protocolId: number = 9987;

	public memberCount: number = 0;
	public roleAvAId: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_KohAllianceRoleMembers(input);
    }

    private deserializeAs_KohAllianceRoleMembers(input: ICustomDataInput)
    {
        this._memberCountFunc(input);
        this._roleAvAIdFunc(input);
    }

    private _memberCountFunc(input: ICustomDataInput)
    {
        this.memberCount = input.readVarUhLong();
        if(this.memberCount < 0 || this.memberCount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberCount + ") on element of KohAllianceRoleMembers.memberCount.");
        }
    }

    private _roleAvAIdFunc(input: ICustomDataInput)
    {
        this.roleAvAId = input.readInt();
    }

}