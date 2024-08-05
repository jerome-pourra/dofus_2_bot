import { PlayerStatus } from "./../character/status/PlayerStatus";
import { SocialMember } from "./../social/SocialMember";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class AllianceMemberInfo extends SocialMember
{

	public static readonly protocolId: number = 7753;

	public avaRoleId: number = 0;

    public constructor()
    {
        super();
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