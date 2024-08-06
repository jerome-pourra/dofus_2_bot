import { AllianceMemberInfo } from "./../../../types/game/alliance/AllianceMemberInfo";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceMemberInformationUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3877;

	public member: AllianceMemberInfo;

    public constructor()
    {
        super();
        this.member = new AllianceMemberInfo();
    }

    public getMessageId()
    {
        return AllianceMemberInformationUpdateMessage.protocolId;
    }

    public initAllianceMemberInformationUpdateMessage(member: AllianceMemberInfo = null): AllianceMemberInformationUpdateMessage
    {
        this.member = member;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AllianceMemberInformationUpdateMessage(output);
    }

    public serializeAs_AllianceMemberInformationUpdateMessage(output: ICustomDataOutput)
    {
        this.member.serializeAs_AllianceMemberInfo(output);
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