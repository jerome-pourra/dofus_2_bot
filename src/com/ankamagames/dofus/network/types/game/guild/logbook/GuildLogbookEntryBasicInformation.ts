import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class GuildLogbookEntryBasicInformation implements INetworkType
{

	public static readonly protocolId: number = 8590;

	public id: number = 0;
	public date: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return GuildLogbookEntryBasicInformation.protocolId;
    }

    public initGuildLogbookEntryBasicInformation(id: number = 0, date: number = 0): GuildLogbookEntryBasicInformation
    {
        this.id = id;
        this.date = date;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildLogbookEntryBasicInformation(output);
    }

    public serializeAs_GuildLogbookEntryBasicInformation(output: ICustomDataOutput)
    {
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarInt(this.id);
        if(this.date < 0 || this.date > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.date + ") on element date.");
        }
        output.writeDouble(this.date);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildLogbookEntryBasicInformation(input);
    }

    private deserializeAs_GuildLogbookEntryBasicInformation(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._dateFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhInt();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of GuildLogbookEntryBasicInformation.id.");
        }
    }

    private _dateFunc(input: ICustomDataInput)
    {
        this.date = input.readDouble();
        if(this.date < 0 || this.date > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.date + ") on element of GuildLogbookEntryBasicInformation.date.");
        }
    }

}