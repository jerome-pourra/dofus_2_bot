import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildInvitationStateRecruterMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2343;

	public recrutedName: string = "";
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
        this.deserializeAs_GuildInvitationStateRecruterMessage(input);
    }

    private deserializeAs_GuildInvitationStateRecruterMessage(input: ICustomDataInput)
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
            throw new Error("Forbidden value (" + this.invitationState + ") on element of GuildInvitationStateRecruterMessage.invitationState.");
        }
    }

}