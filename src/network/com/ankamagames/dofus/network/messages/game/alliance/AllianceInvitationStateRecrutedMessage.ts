import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceInvitationStateRecrutedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7264;

	public invitationState: number = 0;

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
        this.deserializeAs_AllianceInvitationStateRecrutedMessage(input);
    }

    private deserializeAs_AllianceInvitationStateRecrutedMessage(input: ICustomDataInput)
    {
        this._invitationStateFunc(input);
    }

    private _invitationStateFunc(input: ICustomDataInput)
    {
        this.invitationState = input.readByte();
        if(this.invitationState < 0)
        {
            throw new Error("Forbidden value (" + this.invitationState + ") on element of AllianceInvitationStateRecrutedMessage.invitationState.");
        }
    }

}