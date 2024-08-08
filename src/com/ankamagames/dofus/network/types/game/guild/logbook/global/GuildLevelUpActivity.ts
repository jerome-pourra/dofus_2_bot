import { GuildLogbookEntryBasicInformation } from "./../GuildLogbookEntryBasicInformation";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class GuildLevelUpActivity extends GuildLogbookEntryBasicInformation implements INetworkType
{

	public static readonly protocolId: number = 3398;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public newGuildLevel: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GuildLevelUpActivity.protocolId;
    }

    public isEndpointClient()
    {
        return GuildLevelUpActivity.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildLevelUpActivity.endpointServer;
    }

    public initGuildLevelUpActivity(id: number = 0, date: number = 0, newGuildLevel: number = 0): GuildLevelUpActivity
    {
        super.initGuildLogbookEntryBasicInformation(id,date);
        this.newGuildLevel = newGuildLevel;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildLevelUpActivity(output);
    }

    public serializeAs_GuildLevelUpActivity(output: ICustomDataOutput)
    {
        super.serializeAs_GuildLogbookEntryBasicInformation(output);
        if(this.newGuildLevel < 0 || this.newGuildLevel > 255)
        {
            throw new Error("Forbidden value (" + this.newGuildLevel + ") on element newGuildLevel.");
        }
        output.writeByte(this.newGuildLevel);
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