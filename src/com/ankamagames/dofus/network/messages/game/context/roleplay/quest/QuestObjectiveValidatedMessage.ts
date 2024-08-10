import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class QuestObjectiveValidatedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3508;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public questId: number = 0;
	public objectiveId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return QuestObjectiveValidatedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return QuestObjectiveValidatedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return QuestObjectiveValidatedMessage.endpointServer;
    }

    public initQuestObjectiveValidatedMessage(questId: number = 0, objectiveId: number = 0): QuestObjectiveValidatedMessage
    {
        this.questId = questId;
        this.objectiveId = objectiveId;
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
        this.serializeAs_QuestObjectiveValidatedMessage(output);
    }

    public serializeAs_QuestObjectiveValidatedMessage(output: ICustomDataOutput)
    {
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element questId.");
        }
        output.writeVarShort(this.questId);
        if(this.objectiveId < 0)
        {
            throw new Error("Forbidden value (" + this.objectiveId + ") on element objectiveId.");
        }
        output.writeVarShort(this.objectiveId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_QuestObjectiveValidatedMessage(input);
    }

    private deserializeAs_QuestObjectiveValidatedMessage(input: ICustomDataInput)
    {
        this._questIdFunc(input);
        this._objectiveIdFunc(input);
    }

    private _questIdFunc(input: ICustomDataInput)
    {
        this.questId = input.readVarUhShort();
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element of QuestObjectiveValidatedMessage.questId.");
        }
    }

    private _objectiveIdFunc(input: ICustomDataInput)
    {
        this.objectiveId = input.readVarUhShort();
        if(this.objectiveId < 0)
        {
            throw new Error("Forbidden value (" + this.objectiveId + ") on element of QuestObjectiveValidatedMessage.objectiveId.");
        }
    }

}