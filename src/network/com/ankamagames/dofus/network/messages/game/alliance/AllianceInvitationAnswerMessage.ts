import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceInvitationAnswerMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3558;

	public accept: boolean = false;

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
        this.deserializeAs_AllianceInvitationAnswerMessage(input);
    }

    private deserializeAs_AllianceInvitationAnswerMessage(input: ICustomDataInput)
    {
        this._acceptFunc(input);
    }

    private _acceptFunc(input: ICustomDataInput)
    {
        this.accept = input.readBoolean();
    }

}