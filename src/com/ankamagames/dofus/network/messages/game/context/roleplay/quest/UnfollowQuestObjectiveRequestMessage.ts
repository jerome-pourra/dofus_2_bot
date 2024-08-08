import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class UnfollowQuestObjectiveRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2136;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public questId: number = 0;
	public objectiveId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return UnfollowQuestObjectiveRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return UnfollowQuestObjectiveRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return UnfollowQuestObjectiveRequestMessage.endpointServer;
    }

    public initUnfollowQuestObjectiveRequestMessage(questId: number = 0, objectiveId: number = 0): UnfollowQuestObjectiveRequestMessage
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
        this.serializeAs_UnfollowQuestObjectiveRequestMessage(output);
    }

    public serializeAs_UnfollowQuestObjectiveRequestMessage(output: ICustomDataOutput)
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
        this.deserializeAs_UnfollowQuestObjectiveRequestMessage(input);
    }

    private deserializeAs_UnfollowQuestObjectiveRequestMessage(input: ICustomDataInput)
    {
        this._questIdFunc(input);
        this._objectiveIdFunc(input);
    }

    private _questIdFunc(input: ICustomDataInput)
    {
        this.questId = input.readVarUhShort();
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element of UnfollowQuestObjectiveRequestMessage.questId.");
        }
    }

    private _objectiveIdFunc(input: ICustomDataInput)
    {
        this.objectiveId = input.readShort();
    }

}