import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class QuestActiveInformations implements INetworkType
{

	public static readonly protocolId: number = 7048;

	public questId: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return QuestActiveInformations.protocolId;
    }

    public initQuestActiveInformations(questId: number = 0): QuestActiveInformations
    {
        this.questId = questId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_QuestActiveInformations(output);
    }

    public serializeAs_QuestActiveInformations(output: ICustomDataOutput)
    {
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element questId.");
        }
        output.writeVarShort(this.questId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_QuestActiveInformations(input);
    }

    private deserializeAs_QuestActiveInformations(input: ICustomDataInput)
    {
        this._questIdFunc(input);
    }

    private _questIdFunc(input: ICustomDataInput)
    {
        this.questId = input.readVarUhShort();
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element of QuestActiveInformations.questId.");
        }
    }

}