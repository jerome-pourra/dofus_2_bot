import { ObjectItemNotInContainer } from "./../../../data/items/ObjectItemNotInContainer";
import { GuildLogbookEntryBasicInformation } from "./../GuildLogbookEntryBasicInformation";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class GuildLogbookChestActivity extends GuildLogbookEntryBasicInformation implements INetworkType
{

	public static readonly protocolId: number = 9067;

	public playerId: number = 0;
	public playerName: string = "";
	public eventType: number = 0;
	public quantity: number = 0;
	public object: ObjectItemNotInContainer;
	public sourceTabId: number = 0;
	public destinationTabId: number = 0;

    public constructor()
    {
        super();
        this.object = new ObjectItemNotInContainer();
    }

    public getTypeId()
    {
        return GuildLogbookChestActivity.protocolId;
    }

    public initGuildLogbookChestActivity(id: number = 0, date: number = 0, playerId: number = 0, playerName: string = "", eventType: number = 0, quantity: number = 0, object: ObjectItemNotInContainer = null, sourceTabId: number = 0, destinationTabId: number = 0): GuildLogbookChestActivity
    {
        super.initGuildLogbookEntryBasicInformation(id,date);
        this.playerId = playerId;
        this.playerName = playerName;
        this.eventType = eventType;
        this.quantity = quantity;
        this.object = object;
        this.sourceTabId = sourceTabId;
        this.destinationTabId = destinationTabId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildLogbookChestActivity(output);
    }

    public serializeAs_GuildLogbookChestActivity(output: ICustomDataOutput)
    {
        super.serializeAs_GuildLogbookEntryBasicInformation(output);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
        output.writeUTF(this.playerName);
        output.writeByte(this.eventType);
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
        }
        output.writeInt(this.quantity);
        this.object.serializeAs_ObjectItemNotInContainer(output);
        if(this.sourceTabId < 0)
        {
            throw new Error("Forbidden value (" + this.sourceTabId + ") on element sourceTabId.");
        }
        output.writeInt(this.sourceTabId);
        if(this.destinationTabId < 0)
        {
            throw new Error("Forbidden value (" + this.destinationTabId + ") on element destinationTabId.");
        }
        output.writeInt(this.destinationTabId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildLogbookChestActivity(input);
    }

    private deserializeAs_GuildLogbookChestActivity(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerIdFunc(input);
        this._playerNameFunc(input);
        this._eventTypeFunc(input);
        this._quantityFunc(input);
        this.object = new ObjectItemNotInContainer();
        this.object.deserialize(input);
        this._sourceTabIdFunc(input);
        this._destinationTabIdFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of GuildLogbookChestActivity.playerId.");
        }
    }

    private _playerNameFunc(input: ICustomDataInput)
    {
        this.playerName = input.readUTF();
    }

    private _eventTypeFunc(input: ICustomDataInput)
    {
        this.eventType = input.readByte();
        if(this.eventType < 0)
        {
            throw new Error("Forbidden value (" + this.eventType + ") on element of GuildLogbookChestActivity.eventType.");
        }
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readInt();
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of GuildLogbookChestActivity.quantity.");
        }
    }

    private _sourceTabIdFunc(input: ICustomDataInput)
    {
        this.sourceTabId = input.readInt();
        if(this.sourceTabId < 0)
        {
            throw new Error("Forbidden value (" + this.sourceTabId + ") on element of GuildLogbookChestActivity.sourceTabId.");
        }
    }

    private _destinationTabIdFunc(input: ICustomDataInput)
    {
        this.destinationTabId = input.readInt();
        if(this.destinationTabId < 0)
        {
            throw new Error("Forbidden value (" + this.destinationTabId + ") on element of GuildLogbookChestActivity.destinationTabId.");
        }
    }

}