import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceInvitationAnswerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3558;

	public accept: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceInvitationAnswerMessage.protocolId;
    }

    public initAllianceInvitationAnswerMessage(accept: boolean = false): AllianceInvitationAnswerMessage
    {
        this.accept = accept;
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
        this.serializeAs_AllianceInvitationAnswerMessage(output);
    }

    public serializeAs_AllianceInvitationAnswerMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.accept);
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