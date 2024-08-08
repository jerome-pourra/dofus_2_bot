import { QuestActiveInformations } from "./../../../../../types/game/context/roleplay/quest/QuestActiveInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { QuestStepInfoMessage } from "./QuestStepInfoMessage";

export class WatchQuestStepInfoMessage extends QuestStepInfoMessage implements INetworkMessage
{

	public static readonly protocolId: number = 141;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public playerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return WatchQuestStepInfoMessage.protocolId;
    }

    public isEndpointClient()
    {
        return WatchQuestStepInfoMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return WatchQuestStepInfoMessage.endpointServer;
    }

    public initWatchQuestStepInfoMessage(infos: QuestActiveInformations = null, playerId: number = 0): WatchQuestStepInfoMessage
    {
        super.initQuestStepInfoMessage(infos);
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
        this.serializeAs_WatchQuestStepInfoMessage(output);
    }

    public serializeAs_WatchQuestStepInfoMessage(output: ICustomDataOutput)
    {
        super.serializeAs_QuestStepInfoMessage(output);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_WatchQuestStepInfoMessage(input);
    }

    private deserializeAs_WatchQuestStepInfoMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerIdFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of WatchQuestStepInfoMessage.playerId.");
        }
    }

}