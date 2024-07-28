import { AbstractPlayerSearchInformation } from "./../../../../../types/common/AbstractPlayerSearchInformation";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { PartyInvitationRequestMessage } from "./PartyInvitationRequestMessage";

export class PartyInvitationArenaRequestMessage extends PartyInvitationRequestMessage
{

	public static readonly protocolId: number = 2774;

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
        this.deserializeAs_PartyInvitationArenaRequestMessage(input);
    }

    private deserializeAs_PartyInvitationArenaRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}