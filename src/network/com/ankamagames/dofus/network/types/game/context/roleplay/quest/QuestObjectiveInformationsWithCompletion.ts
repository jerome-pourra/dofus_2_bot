import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { QuestObjectiveInformations } from "./QuestObjectiveInformations";

export class QuestObjectiveInformationsWithCompletion extends QuestObjectiveInformations
{

	public static readonly protocolId: number = 8731;

	public curCompletion: number = 0;
	public maxCompletion: number = 0;

    public constructor()
    {
        super();
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