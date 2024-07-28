import { AllianceMemberInfo } from "./../../../types/game/alliance/AllianceMemberInfo";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceMemberInformationUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3877;

	public member: AllianceMemberInfo;

    public constructor()
    {
        super();
        this.member = new AllianceMemberInfo();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceMemberInformationUpdateMessage(input);
    }

    private deserializeAs_AllianceMemberInformationUpdateMessage(input: ICustomDataInput)
    {
        this.member = new AllianceMemberInfo();
        this.member.deserialize(input);
    }

}