import { GuildLogbookEntryBasicInformation } from "./../GuildLogbookEntryBasicInformation";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class GuildLevelUpActivity extends GuildLogbookEntryBasicInformation
{

	public static readonly protocolId: number = 3398;

	public newGuildLevel: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildLevelUpActivity(input);
    }

    private deserializeAs_GuildLevelUpActivity(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._newGuildLevelFunc(input);
    }

    private _newGuildLevelFunc(input: ICustomDataInput)
    {
        this.newGuildLevel = input.readUnsignedByte();
        if(this.newGuildLevel < 0 || this.newGuildLevel > 255)
        {
            throw new Error("Forbidden value (" + this.newGuildLevel + ") on element of GuildLevelUpActivity.newGuildLevel.");
        }
    }

}