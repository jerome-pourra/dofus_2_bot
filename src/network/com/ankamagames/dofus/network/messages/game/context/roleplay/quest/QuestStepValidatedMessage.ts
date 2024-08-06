import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class QuestStepValidatedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4373;

	public questId: number = 0;
	public stepId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return QuestStepValidatedMessage.protocolId;
    }

    public initQuestStepValidatedMessage(questId: number = 0, stepId: number = 0): QuestStepValidatedMessage
    {
        this.questId = questId;
        this.stepId = stepId;
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
        this.serializeAs_QuestStepValidatedMessage(output);
    }

    public serializeAs_QuestStepValidatedMessage(output: ICustomDataOutput)
    {
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element questId.");
        }
        output.writeVarShort(this.questId);
        if(this.stepId < 0)
        {
            throw new Error("Forbidden value (" + this.stepId + ") on element stepId.");
        }
        output.writeVarShort(this.stepId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_QuestStepValidatedMessage(input);
    }

    private deserializeAs_QuestStepValidatedMessage(input: ICustomDataInput)
    {
        this._questIdFunc(input);
        this._stepIdFunc(input);
    }

    private _questIdFunc(input: ICustomDataInput)
    {
        this.questId = input.readVarUhShort();
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element of QuestStepValidatedMessage.questId.");
        }
    }

    private _stepIdFunc(input: ICustomDataInput)
    {
        this.stepId = input.readVarUhShort();
        if(this.stepId < 0)
        {
            throw new Error("Forbidden value (" + this.stepId + ") on element of QuestStepValidatedMessage.stepId.");
        }
    }

}