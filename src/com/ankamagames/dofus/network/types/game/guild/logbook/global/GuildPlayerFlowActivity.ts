import { GuildLogbookEntryBasicInformation } from "./../GuildLogbookEntryBasicInformation";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class GuildPlayerFlowActivity extends GuildLogbookEntryBasicInformation implements INetworkType
{

	public static readonly protocolId: number = 2970;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public playerId: number = 0;
	public playerName: string = "";
	public playerFlowEventType: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GuildPlayerFlowActivity.protocolId;
    }

    public isEndpointClient()
    {
        return GuildPlayerFlowActivity.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildPlayerFlowActivity.endpointServer;
    }

    public initGuildPlayerFlowActivity(id: number = 0, date: number = 0, playerId: number = 0, playerName: string = "", playerFlowEventType: number = 0): GuildPlayerFlowActivity
    {
        super.initGuildLogbookEntryBasicInformation(id,date);
        this.playerId = playerId;
        this.playerName = playerName;
        this.playerFlowEventType = playerFlowEventType;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildPlayerFlowActivity(output);
    }

    public serializeAs_GuildPlayerFlowActivity(output: ICustomDataOutput)
    {
        super.serializeAs_GuildLogbookEntryBasicInformation(output);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
        output.writeUTF(this.playerName);
        output.writeByte(this.playerFlowEventType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildPlayerFlowActivity(input);
    }

    private deserializeAs_GuildPlayerFlowActivity(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerIdFunc(input);
        this._playerNameFunc(input);
        this._playerFlowEventTypeFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of GuildPlayerFlowActivity.playerId.");
        }
    }

    private _playerNameFunc(input: ICustomDataInput)
    {
        this.playerName = input.readUTF();
    }

    private _playerFlowEventTypeFunc(input: ICustomDataInput)
    {
        this.playerFlowEventType = input.readByte();
        if(this.playerFlowEventType < 0)
        {
            throw new Error("Forbidden value (" + this.playerFlowEventType + ") on element of GuildPlayerFlowActivity.playerFlowEventType.");
        }
    }

}