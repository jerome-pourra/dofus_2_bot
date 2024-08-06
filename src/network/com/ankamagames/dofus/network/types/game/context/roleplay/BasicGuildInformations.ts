import { AbstractSocialGroupInfos } from "./../../social/AbstractSocialGroupInfos";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class BasicGuildInformations extends AbstractSocialGroupInfos implements INetworkType
{

	public static readonly protocolId: number = 4606;

	public guildId: number = 0;
	public guildName: string = "";
	public guildLevel: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return BasicGuildInformations.protocolId;
    }

    public initBasicGuildInformations(guildId: number = 0, guildName: string = "", guildLevel: number = 0): BasicGuildInformations
    {
        this.guildId = guildId;
        this.guildName = guildName;
        this.guildLevel = guildLevel;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_BasicGuildInformations(output);
    }

    public serializeAs_BasicGuildInformations(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractSocialGroupInfos(output);
        if(this.guildId < 0)
        {
            throw new Error("Forbidden value (" + this.guildId + ") on element guildId.");
        }
        output.writeVarInt(this.guildId);
        output.writeUTF(this.guildName);
        if(this.guildLevel < 0 || this.guildLevel > 200)
        {
            throw new Error("Forbidden value (" + this.guildLevel + ") on element guildLevel.");
        }
        output.writeByte(this.guildLevel);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BasicGuildInformations(input);
    }

    private deserializeAs_BasicGuildInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._guildIdFunc(input);
        this._guildNameFunc(input);
        this._guildLevelFunc(input);
    }

    private _guildIdFunc(input: ICustomDataInput)
    {
        this.guildId = input.readVarUhInt();
        if(this.guildId < 0)
        {
            throw new Error("Forbidden value (" + this.guildId + ") on element of BasicGuildInformations.guildId.");
        }
    }

    private _guildNameFunc(input: ICustomDataInput)
    {
        this.guildName = input.readUTF();
    }

    private _guildLevelFunc(input: ICustomDataInput)
    {
        this.guildLevel = input.readUnsignedByte();
        if(this.guildLevel < 0 || this.guildLevel > 200)
        {
            throw new Error("Forbidden value (" + this.guildLevel + ") on element of BasicGuildInformations.guildLevel.");
        }
    }

}