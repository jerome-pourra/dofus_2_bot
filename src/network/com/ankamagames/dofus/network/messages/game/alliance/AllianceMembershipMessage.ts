import { AllianceInformation } from "./../../../types/game/context/roleplay/AllianceInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { AllianceJoinedMessage } from "./AllianceJoinedMessage";

export class AllianceMembershipMessage extends AllianceJoinedMessage
{

	public static readonly protocolId: number = 3547;

    public constructor()
    {
        super();
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
        this.deserializeAs_AllianceMembershipMessage(input);
    }

    private deserializeAs_AllianceMembershipMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}