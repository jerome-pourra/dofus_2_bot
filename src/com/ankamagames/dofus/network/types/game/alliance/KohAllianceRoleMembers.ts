import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class KohAllianceRoleMembers implements INetworkType
{

	public static readonly protocolId: number = 9987;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public memberCount: number = 0;
	public roleAvAId: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return KohAllianceRoleMembers.protocolId;
    }

    public isEndpointClient()
    {
        return KohAllianceRoleMembers.endpointClient;
    }

    public isEndpointServer()
    {
        return KohAllianceRoleMembers.endpointServer;
    }

    public initKohAllianceRoleMembers(memberCount: number = 0, roleAvAId: number = 0): KohAllianceRoleMembers
    {
        this.memberCount = memberCount;
        this.roleAvAId = roleAvAId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_KohAllianceRoleMembers(output);
    }

    public serializeAs_KohAllianceRoleMembers(output: ICustomDataOutput)
    {
        if(this.memberCount < 0 || this.memberCount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberCount + ") on element memberCount.");
        }
        output.writeVarLong(this.memberCount);
        output.writeInt(this.roleAvAId);
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