import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class QuestStartRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8398;

	public questId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return QuestStartRequestMessage.protocolId;
    }

    public initQuestStartRequestMessage(questId: number = 0): QuestStartRequestMessage
    {
        this.questId = questId;
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
        this.serializeAs_QuestStartRequestMessage(output);
    }

    public serializeAs_QuestStartRequestMessage(output: ICustomDataOutput)
    {
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element questId.");
        }
        output.writeVarShort(this.questId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_QuestStartRequestMessage(input);
    }

    private deserializeAs_QuestStartRequestMessage(input: ICustomDataInput)
    {
        this._questIdFunc(input);
    }

    private _questIdFunc(input: ICustomDataInput)
    {
        this.questId = input.readVarUhShort();
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element of QuestStartRequestMessage.questId.");
        }
    }

}