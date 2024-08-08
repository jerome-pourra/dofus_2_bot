import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class QuestStepStartedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2945;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public questId: number = 0;
	public stepId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return QuestStepStartedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return QuestStepStartedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return QuestStepStartedMessage.endpointServer;
    }

    public initQuestStepStartedMessage(questId: number = 0, stepId: number = 0): QuestStepStartedMessage
    {
        this.questId = questId;
        this.stepId = stepId;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_QuestStepStartedMessage(output);
    }

    public serializeAs_QuestStepStartedMessage(output: ICustomDataOutput)
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
        this.deserializeAs_QuestStepStartedMessage(input);
    }

    private deserializeAs_QuestStepStartedMessage(input: ICustomDataInput)
    {
        this._questIdFunc(input);
        this._stepIdFunc(input);
    }

    private _questIdFunc(input: ICustomDataInput)
    {
        this.questId = input.readVarUhShort();
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element of QuestStepStartedMessage.questId.");
        }
    }

    private _stepIdFunc(input: ICustomDataInput)
    {
        this.stepId = input.readVarUhShort();
        if(this.stepId < 0)
        {
            throw new Error("Forbidden value (" + this.stepId + ") on element of QuestStepStartedMessage.stepId.");
        }
    }

}