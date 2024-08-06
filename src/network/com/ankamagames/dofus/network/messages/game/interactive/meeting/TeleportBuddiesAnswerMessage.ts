import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TeleportBuddiesAnswerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 368;

	public accept: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TeleportBuddiesAnswerMessage.protocolId;
    }

    public initTeleportBuddiesAnswerMessage(accept: boolean = false): TeleportBuddiesAnswerMessage
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
        this.serializeAs_TeleportBuddiesAnswerMessage(output);
    }

    public serializeAs_TeleportBuddiesAnswerMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.accept);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TeleportBuddiesAnswerMessage(input);
    }

    private deserializeAs_TeleportBuddiesAnswerMessage(input: ICustomDataInput)
    {
        this._acceptFunc(input);
    }

    private _acceptFunc(input: ICustomDataInput)
    {
        this.accept = input.readBoolean();
    }

}