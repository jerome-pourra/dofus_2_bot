import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceInvitationStateRecrutedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7264;

	public invitationState: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceInvitationStateRecrutedMessage.protocolId;
    }

    public initAllianceInvitationStateRecrutedMessage(invitationState: number = 0): AllianceInvitationStateRecrutedMessage
    {
        this.invitationState = invitationState;
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
        this.serializeAs_AllianceInvitationStateRecrutedMessage(output);
    }

    public serializeAs_AllianceInvitationStateRecrutedMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.invitationState);
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