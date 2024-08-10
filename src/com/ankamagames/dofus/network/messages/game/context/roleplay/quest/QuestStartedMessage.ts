import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class QuestStartedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8372;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public questId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return QuestStartedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return QuestStartedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return QuestStartedMessage.endpointServer;
    }

    public initQuestStartedMessage(questId: number = 0): QuestStartedMessage
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
        this.serializeAs_QuestStartedMessage(output);
    }

    public serializeAs_QuestStartedMessage(output: ICustomDataOutput)
    {
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element questId.");
        }
        output.writeVarShort(this.questId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_QuestStartedMessage(input);
    }

    private deserializeAs_QuestStartedMessage(input: ICustomDataInput)
    {
        this._questIdFunc(input);
    }

    private _questIdFunc(input: ICustomDataInput)
    {
        this.questId = input.readVarUhShort();
        if(this.questId < 0)
        {
            throw new Error("Forbidden value (" + this.questId + ") on element of QuestStartedMessage.questId.");
        }
    }

}