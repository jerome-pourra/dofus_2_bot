import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class QuestStepInfoRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5778;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public questId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return QuestStepInfoRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return QuestStepInfoRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return QuestStepInfoRequestMessage.endpointServer;
    }

    public initQuestStepInfoRequestMessage(questId: number = 0): QuestStepInfoRequestMessage
    {
        this.questId = questId;
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
        this.serializeAs_QuestStepInfoRequestMessage(output);
    }

    public serializeAs_QuestStepInfoRequestMessage(output: ICustomDataOutput)
    {
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element questId.");
        }
        output.writeVarShort(this.questId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_QuestStepInfoRequestMessage(input);
    }

    private deserializeAs_QuestStepInfoRequestMessage(input: ICustomDataInput)
    {
        this._questIdFunc(input);
    }

    private _questIdFunc(input: ICustomDataInput)
    {
        this.questId = input.readVarUhShort();
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element of QuestStepInfoRequestMessage.questId.");
        }
    }

}