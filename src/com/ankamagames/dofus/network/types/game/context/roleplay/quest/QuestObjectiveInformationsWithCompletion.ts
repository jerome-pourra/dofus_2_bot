import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { QuestObjectiveInformations } from "./QuestObjectiveInformations";

export class QuestObjectiveInformationsWithCompletion extends QuestObjectiveInformations implements INetworkType
{

	public static readonly protocolId: number = 8731;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public curCompletion: number = 0;
	public maxCompletion: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return QuestObjectiveInformationsWithCompletion.protocolId;
    }

    public isEndpointClient()
    {
        return QuestObjectiveInformationsWithCompletion.endpointClient;
    }

    public isEndpointServer()
    {
        return QuestObjectiveInformationsWithCompletion.endpointServer;
    }

    public initQuestObjectiveInformationsWithCompletion(objectiveId: number = 0, objectiveStatus: boolean = false, dialogParams: Array<string> = null, curCompletion: number = 0, maxCompletion: number = 0): QuestObjectiveInformationsWithCompletion
    {
        super.initQuestObjectiveInformations(objectiveId,objectiveStatus,dialogParams);
        this.curCompletion = curCompletion;
        this.maxCompletion = maxCompletion;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_QuestObjectiveInformationsWithCompletion(output);
    }

    public serializeAs_QuestObjectiveInformationsWithCompletion(output: ICustomDataOutput)
    {
        super.serializeAs_QuestObjectiveInformations(output);
        if(this.curCompletion < 0)
        {
            throw new Error("Forbidden value (" + this.curCompletion + ") on element curCompletion.");
        }
        output.writeVarShort(this.curCompletion);
        if(this.maxCompletion < 0)
        {
            throw new Error("Forbidden value (" + this.maxCompletion + ") on element maxCompletion.");
        }
        output.writeVarShort(this.maxCompletion);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_QuestObjectiveInformationsWithCompletion(input);
    }

    private deserializeAs_QuestObjectiveInformationsWithCompletion(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._curCompletionFunc(input);
        this._maxCompletionFunc(input);
    }

    private _curCompletionFunc(input: ICustomDataInput)
    {
        this.curCompletion = input.readVarUhShort();
        if(this.curCompletion < 0)
        {
            throw new Error("Forbidden value (" + this.curCompletion + ") on element of QuestObjectiveInformationsWithCompletion.curCompletion.");
        }
    }

    private _maxCompletionFunc(input: ICustomDataInput)
    {
        this.maxCompletion = input.readVarUhShort();
        if(this.maxCompletion < 0)
        {
            throw new Error("Forbidden value (" + this.maxCompletion + ") on element of QuestObjectiveInformationsWithCompletion.maxCompletion.");
        }
    }

}