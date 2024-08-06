import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class ArenaFightAnswerAcknowledgementMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2033;

	public acknowledged: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ArenaFightAnswerAcknowledgementMessage.protocolId;
    }

    public initArenaFightAnswerAcknowledgementMessage(acknowledged: boolean = false): ArenaFightAnswerAcknowledgementMessage
    {
        this.acknowledged = acknowledged;
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
        this.serializeAs_ArenaFightAnswerAcknowledgementMessage(output);
    }

    public serializeAs_ArenaFightAnswerAcknowledgementMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.acknowledged);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ArenaFightAnswerAcknowledgementMessage(input);
    }

    private deserializeAs_ArenaFightAnswerAcknowledgementMessage(input: ICustomDataInput)
    {
        this._acknowledgedFunc(input);
    }

    private _acknowledgedFunc(input: ICustomDataInput)
    {
        this.acknowledged = input.readBoolean();
    }

}