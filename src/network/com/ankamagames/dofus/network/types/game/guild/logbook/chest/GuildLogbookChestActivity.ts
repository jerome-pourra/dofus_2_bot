import { ObjectItemNotInContainer } from "./../../../data/items/ObjectItemNotInContainer";
import { GuildLogbookEntryBasicInformation } from "./../GuildLogbookEntryBasicInformation";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class GuildLogbookChestActivity extends GuildLogbookEntryBasicInformation
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