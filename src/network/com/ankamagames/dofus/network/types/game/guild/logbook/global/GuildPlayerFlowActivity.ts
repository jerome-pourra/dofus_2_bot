import { GuildLogbookEntryBasicInformation } from "./../GuildLogbookEntryBasicInformation";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class GuildPlayerFlowActivity extends GuildLogbookEntryBasicInformation
{

	public static readonly protocolId: number = 2970;

	public playerId: number = 0;
	public playerName: string = "";
	public playerFlowEventType: number = 0;

    public constructor()
    {
        super();
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