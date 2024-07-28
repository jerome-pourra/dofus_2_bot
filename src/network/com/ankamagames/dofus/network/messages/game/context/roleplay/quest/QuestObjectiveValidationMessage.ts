import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class QuestObjectiveValidationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4654;

	public questId: number = 0;
	public objectiveId: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_QuestObjectiveValidationMessage(input);
    }

    private deserializeAs_QuestObjectiveValidationMessage(input: ICustomDataInput)
    {
        this._questIdFunc(input);
        this._objectiveIdFunc(input);
    }

    private _questIdFunc(input: ICustomDataInput)
    {
        this.questId = input.readVarUhShort();
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element of QuestObjectiveValidationMessage.questId.");
        }
    }

    private _objectiveIdFunc(input: ICustomDataInput)
    {
        this.objectiveId = input.readVarUhShort();
        if(this.objectiveId < 0)
        {
            throw new Error("Forbidden value (" + this.objectiveId + ") on element of QuestObjectiveValidationMessage.objectiveId.");
        }
    }

}