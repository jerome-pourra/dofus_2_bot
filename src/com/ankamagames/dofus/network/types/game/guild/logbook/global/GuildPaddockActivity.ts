import { MapCoordinatesExtended } from "./../../../context/MapCoordinatesExtended";
import { GuildLogbookEntryBasicInformation } from "./../GuildLogbookEntryBasicInformation";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class GuildPaddockActivity extends GuildLogbookEntryBasicInformation implements INetworkType
{

	public static readonly protocolId: number = 3935;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public playerId: number = 0;
	public playerName: string = "";
	public paddockCoordinates: MapCoordinatesExtended;
	public farmId: number = 0;
	public paddockEventType: number = 0;

    public constructor()
    {
        super();
        this.paddockCoordinates = new MapCoordinatesExtended();
    }

    public getTypeId()
    {
        return GuildPaddockActivity.protocolId;
    }

    public isEndpointClient()
    {
        return GuildPaddockActivity.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildPaddockActivity.endpointServer;
    }

    public initGuildPaddockActivity(id: number = 0, date: number = 0, playerId: number = 0, playerName: string = "", paddockCoordinates: MapCoordinatesExtended = null, farmId: number = 0, paddockEventType: number = 0): GuildPaddockActivity
    {
        super.initGuildLogbookEntryBasicInformation(id,date);
        this.playerId = playerId;
        this.playerName = playerName;
        this.paddockCoordinates = paddockCoordinates;
        this.farmId = farmId;
        this.paddockEventType = paddockEventType;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildPaddockActivity(output);
    }

    public serializeAs_GuildPaddockActivity(output: ICustomDataOutput)
    {
        super.serializeAs_GuildLogbookEntryBasicInformation(output);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
        output.writeUTF(this.playerName);
        this.paddockCoordinates.serializeAs_MapCoordinatesExtended(output);
        if(this.farmId < 0 || this.farmId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.farmId + ") on element farmId.");
        }
        output.writeDouble(this.farmId);
        output.writeByte(this.paddockEventType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildPaddockActivity(input);
    }

    private deserializeAs_GuildPaddockActivity(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerIdFunc(input);
        this._playerNameFunc(input);
        this.paddockCoordinates = new MapCoordinatesExtended();
        this.paddockCoordinates.deserialize(input);
        this._farmIdFunc(input);
        this._paddockEventTypeFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of GuildPaddockActivity.playerId.");
        }
    }

    private _playerNameFunc(input: ICustomDataInput)
    {
        this.playerName = input.readUTF();
    }

    private _farmIdFunc(input: ICustomDataInput)
    {
        this.farmId = input.readDouble();
        if(this.farmId < 0 || this.farmId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.farmId + ") on element of GuildPaddockActivity.farmId.");
        }
    }

    private _paddockEventTypeFunc(input: ICustomDataInput)
    {
        this.paddockEventType = input.readByte();
        if(this.paddockEventType < 0)
        {
            throw new Error("Forbidden value (" + this.paddockEventType + ") on element of GuildPaddockActivity.paddockEventType.");
        }
    }

}