import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachInvitationAnswerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2262;

	public accept: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BreachInvitationAnswerMessage.protocolId;
    }

    public initBreachInvitationAnswerMessage(accept: boolean = false): BreachInvitationAnswerMessage
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
        this.serializeAs_BreachInvitationAnswerMessage(output);
    }

    public serializeAs_BreachInvitationAnswerMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.accept);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachInvitationAnswerMessage(input);
    }

    private deserializeAs_BreachInvitationAnswerMessage(input: ICustomDataInput)
    {
        this._acceptFunc(input);
    }

    private _acceptFunc(input: ICustomDataInput)
    {
        this.accept = input.readBoolean();
    }

}