import { AllianceInformation } from "./../../../types/game/context/roleplay/AllianceInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { AllianceJoinedMessage } from "./AllianceJoinedMessage";

export class AllianceMembershipMessage extends AllianceJoinedMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3547;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceMembershipMessage.protocolId;
    }

    public initAllianceMembershipMessage(allianceInfo: AllianceInformation = null, rankId: number = 0): AllianceMembershipMessage
    {
        super.initAllianceJoinedMessage(allianceInfo,rankId);
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
        this.serializeAs_AllianceMembershipMessage(output);
    }

    public serializeAs_AllianceMembershipMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AllianceJoinedMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceMembershipMessage(input);
    }

    private deserializeAs_AllianceMembershipMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}