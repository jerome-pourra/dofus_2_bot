import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class FollowQuestObjectiveRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2913;

	public questId: number = 0;
	public objectiveId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return FollowQuestObjectiveRequestMessage.protocolId;
    }

    public initFollowQuestObjectiveRequestMessage(questId: number = 0, objectiveId: number = 0): FollowQuestObjectiveRequestMessage
    {
        this.questId = questId;
        this.objectiveId = objectiveId;
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
        this.serializeAs_FollowQuestObjectiveRequestMessage(output);
    }

    public serializeAs_FollowQuestObjectiveRequestMessage(output: ICustomDataOutput)
    {
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element questId.");
        }
        output.writeVarShort(this.questId);
        output.writeShort(this.objectiveId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FollowQuestObjectiveRequestMessage(input);
    }

    private deserializeAs_FollowQuestObjectiveRequestMessage(input: ICustomDataInput)
    {
        this._questIdFunc(input);
        this._objectiveIdFunc(input);
    }

    private _questIdFunc(input: ICustomDataInput)
    {
        this.questId = input.readVarUhShort();
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element of FollowQuestObjectiveRequestMessage.questId.");
        }
    }

    private _objectiveIdFunc(input: ICustomDataInput)
    {
        this.objectiveId = input.readShort();
    }

}