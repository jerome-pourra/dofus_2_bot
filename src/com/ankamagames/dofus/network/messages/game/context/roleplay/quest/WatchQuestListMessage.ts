import { QuestActiveInformations } from "./../../../../../types/game/context/roleplay/quest/QuestActiveInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { QuestListMessage } from "./QuestListMessage";

export class WatchQuestListMessage extends QuestListMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5644;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public playerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return WatchQuestListMessage.protocolId;
    }

    public isEndpointClient()
    {
        return WatchQuestListMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return WatchQuestListMessage.endpointServer;
    }

    public initWatchQuestListMessage(finishedQuestsIds: Array<number> = null, finishedQuestsCounts: Array<number> = null, activeQuests: Array<QuestActiveInformations> = null, reinitDoneQuestsIds: Array<number> = null, playerId: number = 0): WatchQuestListMessage
    {
        super.initQuestListMessage(finishedQuestsIds,finishedQuestsCounts,activeQuests,reinitDoneQuestsIds);
        this.playerId = playerId;
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
        this.serializeAs_WatchQuestListMessage(output);
    }

    public serializeAs_WatchQuestListMessage(output: ICustomDataOutput)
    {
        super.serializeAs_QuestListMessage(output);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_WatchQuestListMessage(input);
    }

    private deserializeAs_WatchQuestListMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerIdFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of WatchQuestListMessage.playerId.");
        }
    }

}