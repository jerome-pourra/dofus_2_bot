import { PlayerStatus } from "./../character/status/PlayerStatus";
import { SocialMember } from "./../social/SocialMember";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class AllianceMemberInfo extends SocialMember implements INetworkType
{

	public static readonly protocolId: number = 7753;

	public avaRoleId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return AllianceMemberInfo.protocolId;
    }

    public initAllianceMemberInfo(id: number = 0, name: string = "", level: number = 0, breed: number = 0, sex: boolean = false, connected: number = 99, hoursSinceLastConnection: number = 0, accountId: number = 0, status: PlayerStatus = null, rankId: number = 0, enrollmentDate: number = 0, avaRoleId: number = 0): AllianceMemberInfo
    {
        super.initSocialMember(id,name,level,breed,sex,connected,hoursSinceLastConnection,accountId,status,rankId,enrollmentDate);
        this.avaRoleId = avaRoleId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AllianceMemberInfo(output);
    }

    public serializeAs_AllianceMemberInfo(output: ICustomDataOutput)
    {
        super.serializeAs_SocialMember(output);
        output.writeInt(this.avaRoleId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceMemberInfo(input);
    }

    private deserializeAs_AllianceMemberInfo(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._avaRoleIdFunc(input);
    }

    private _avaRoleIdFunc(input: ICustomDataInput)
    {
        this.avaRoleId = input.readInt();
    }

}