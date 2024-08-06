import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceInvitationStateRecruterMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6551;

	public recrutedName: string = "";
	public invitationState: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceInvitationStateRecruterMessage.protocolId;
    }

    public initAllianceInvitationStateRecruterMessage(recrutedName: string = "", invitationState: number = 0): AllianceInvitationStateRecruterMessage
    {
        this.recrutedName = recrutedName;
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
        this.serializeAs_AllianceInvitationStateRecruterMessage(output);
    }

    public serializeAs_AllianceInvitationStateRecruterMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.recrutedName);
        output.writeByte(this.invitationState);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceInvitationStateRecruterMessage(input);
    }

    private deserializeAs_AllianceInvitationStateRecruterMessage(input: ICustomDataInput)
    {
        this._recrutedNameFunc(input);
        this._invitationStateFunc(input);
    }

    private _recrutedNameFunc(input: ICustomDataInput)
    {
        this.recrutedName = input.readUTF();
    }

    private _invitationStateFunc(input: ICustomDataInput)
    {
        this.invitationState = input.readByte();
        if(this.invitationState < 0)
        {
            throw new Error("Forbidden value (" + this.invitationState + ") on element of AllianceInvitationStateRecruterMessage.invitationState.");
        }
    }

}