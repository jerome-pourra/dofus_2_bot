import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { QuestObjectiveInformations } from "./QuestObjectiveInformations";
import { QuestActiveInformations } from "./QuestActiveInformations";

export class QuestActiveDetailedInformations extends QuestActiveInformations implements INetworkType
{

	public static readonly protocolId: number = 7451;

	public stepId: number = 0;
	public objectives: Array<QuestObjectiveInformations>;

    public constructor()
    {
        super();
        this.objectives = Array<QuestObjectiveInformations>();
    }

    public getTypeId()
    {
        return QuestActiveDetailedInformations.protocolId;
    }

    public initQuestActiveDetailedInformations(questId: number = 0, stepId: number = 0, objectives: Array<QuestObjectiveInformations> = null): QuestActiveDetailedInformations
    {
        super.initQuestActiveInformations(questId);
        this.stepId = stepId;
        this.objectives = objectives;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_QuestActiveDetailedInformations(output);
    }

    public serializeAs_QuestActiveDetailedInformations(output: ICustomDataOutput)
    {
        super.serializeAs_QuestActiveInformations(output);
        if(this.stepId < 0)
        {
            throw new Error("Forbidden value (" + this.stepId + ") on element stepId.");
        }
        output.writeVarShort(this.stepId);
        output.writeShort(this.objectives.length);
        for(var _i2: number = 0; _i2 < this.objectives.length; _i2++)
        {
            output.writeShort((this.objectives[_i2] as QuestObjectiveInformations).getTypeId());
            (this.objectives[_i2] as QuestObjectiveInformations).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_QuestActiveDetailedInformations(input);
    }

    private deserializeAs_QuestActiveDetailedInformations(input: ICustomDataInput)
    {
        let _id2: number = 0;
        let _item2: QuestObjectiveInformations;
        super.deserialize(input);
        this._stepIdFunc(input);
        let _objectivesLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _objectivesLen; _i2++)
        {
            _id2 = input.readUnsignedShort();
            _item2 = ProtocolTypeManager.getInstance(QuestObjectiveInformations,_id2);
            _item2.deserialize(input);
            this.objectives.push(_item2);
        }
    }

    private _stepIdFunc(input: ICustomDataInput)
    {
        this.stepId = input.readVarUhShort();
        if(this.stepId < 0)
        {
            throw new Error("Forbidden value (" + this.stepId + ") on element of QuestActiveDetailedInformations.stepId.");
        }
    }

}