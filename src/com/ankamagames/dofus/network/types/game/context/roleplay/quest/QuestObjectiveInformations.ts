import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class QuestObjectiveInformations implements INetworkType
{

	public static readonly protocolId: number = 7248;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public objectiveId: number = 0;
	public objectiveStatus: boolean = false;
	public dialogParams: Array<string>;

    public constructor()
    {
        this.dialogParams = Array<string>();
    }

    public getTypeId()
    {
        return QuestObjectiveInformations.protocolId;
    }

    public isEndpointClient()
    {
        return QuestObjectiveInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return QuestObjectiveInformations.endpointServer;
    }

    public initQuestObjectiveInformations(objectiveId: number = 0, objectiveStatus: boolean = false, dialogParams: Array<string> = null): QuestObjectiveInformations
    {
        this.objectiveId = objectiveId;
        this.objectiveStatus = objectiveStatus;
        this.dialogParams = dialogParams;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_QuestObjectiveInformations(output);
    }

    public serializeAs_QuestObjectiveInformations(output: ICustomDataOutput)
    {
        if(this.objectiveId < 0)
        {
            throw new Error("Forbidden value (" + this.objectiveId + ") on element objectiveId.");
        }
        output.writeVarShort(this.objectiveId);
        output.writeBoolean(this.objectiveStatus);
        output.writeShort(this.dialogParams.length);
        for(var _i3: number = 0; _i3 < this.dialogParams.length; _i3++)
        {
            output.writeUTF(this.dialogParams[_i3]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_QuestObjectiveInformations(input);
    }

    private deserializeAs_QuestObjectiveInformations(input: ICustomDataInput)
    {
        let _val3: string;
        this._objectiveIdFunc(input);
        this._objectiveStatusFunc(input);
        let _dialogParamsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _dialogParamsLen; _i3++)
        {
            _val3 = String(input.readUTF());
            this.dialogParams.push(_val3);
        }
    }

    private _objectiveIdFunc(input: ICustomDataInput)
    {
        this.objectiveId = input.readVarUhShort();
        if(this.objectiveId < 0)
        {
            throw new Error("Forbidden value (" + this.objectiveId + ") on element of QuestObjectiveInformations.objectiveId.");
        }
    }

    private _objectiveStatusFunc(input: ICustomDataInput)
    {
        this.objectiveStatus = input.readBoolean();
    }

}