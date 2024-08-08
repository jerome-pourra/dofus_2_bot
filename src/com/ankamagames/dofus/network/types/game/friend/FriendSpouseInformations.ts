import { GuildInformations } from "./../context/roleplay/GuildInformations";
import { EntityLook } from "./../look/EntityLook";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class FriendSpouseInformations implements INetworkType
{

	public static readonly protocolId: number = 8260;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public spouseAccountId: number = 0;
	public spouseId: number = 0;
	public spouseName: string = "";
	public spouseLevel: number = 0;
	public breed: number = 0;
	public sex: number = 0;
	public spouseEntityLook: EntityLook;
	public guildInfo: GuildInformations;
	public alignmentSide: number = 0;

    public constructor()
    {
        this.spouseEntityLook = new EntityLook();
        this.guildInfo = new GuildInformations();
    }

    public getTypeId()
    {
        return FriendSpouseInformations.protocolId;
    }

    public isEndpointClient()
    {
        return FriendSpouseInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return FriendSpouseInformations.endpointServer;
    }

    public initFriendSpouseInformations(spouseAccountId: number = 0, spouseId: number = 0, spouseName: string = "", spouseLevel: number = 0, breed: number = 0, sex: number = 0, spouseEntityLook: EntityLook = null, guildInfo: GuildInformations = null, alignmentSide: number = 0): FriendSpouseInformations
    {
        this.spouseAccountId = spouseAccountId;
        this.spouseId = spouseId;
        this.spouseName = spouseName;
        this.spouseLevel = spouseLevel;
        this.breed = breed;
        this.sex = sex;
        this.spouseEntityLook = spouseEntityLook;
        this.guildInfo = guildInfo;
        this.alignmentSide = alignmentSide;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FriendSpouseInformations(output);
    }

    public serializeAs_FriendSpouseInformations(output: ICustomDataOutput)
    {
        if(this.spouseAccountId < 0)
        {
            throw new Error("Forbidden value (" + this.spouseAccountId + ") on element spouseAccountId.");
        }
        output.writeInt(this.spouseAccountId);
        if(this.spouseId < 0 || this.spouseId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.spouseId + ") on element spouseId.");
        }
        output.writeVarLong(this.spouseId);
        output.writeUTF(this.spouseName);
        if(this.spouseLevel < 0)
        {
            throw new Error("Forbidden value (" + this.spouseLevel + ") on element spouseLevel.");
        }
        output.writeVarShort(this.spouseLevel);
        output.writeByte(this.breed);
        output.writeByte(this.sex);
        this.spouseEntityLook.serializeAs_EntityLook(output);
        this.guildInfo.serializeAs_GuildInformations(output);
        output.writeByte(this.alignmentSide);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FriendSpouseInformations(input);
    }

    private deserializeAs_FriendSpouseInformations(input: ICustomDataInput)
    {
        this._spouseAccountIdFunc(input);
        this._spouseIdFunc(input);
        this._spouseNameFunc(input);
        this._spouseLevelFunc(input);
        this._breedFunc(input);
        this._sexFunc(input);
        this.spouseEntityLook = new EntityLook();
        this.spouseEntityLook.deserialize(input);
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(input);
        this._alignmentSideFunc(input);
    }

    private _spouseAccountIdFunc(input: ICustomDataInput)
    {
        this.spouseAccountId = input.readInt();
        if(this.spouseAccountId < 0)
        {
            throw new Error("Forbidden value (" + this.spouseAccountId + ") on element of FriendSpouseInformations.spouseAccountId.");
        }
    }

    private _spouseIdFunc(input: ICustomDataInput)
    {
        this.spouseId = input.readVarUhLong();
        if(this.spouseId < 0 || this.spouseId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.spouseId + ") on element of FriendSpouseInformations.spouseId.");
        }
    }

    private _spouseNameFunc(input: ICustomDataInput)
    {
        this.spouseName = input.readUTF();
    }

    private _spouseLevelFunc(input: ICustomDataInput)
    {
        this.spouseLevel = input.readVarUhShort();
        if(this.spouseLevel < 0)
        {
            throw new Error("Forbidden value (" + this.spouseLevel + ") on element of FriendSpouseInformations.spouseLevel.");
        }
    }

    private _breedFunc(input: ICustomDataInput)
    {
        this.breed = input.readByte();
    }

    private _sexFunc(input: ICustomDataInput)
    {
        this.sex = input.readByte();
    }

    private _alignmentSideFunc(input: ICustomDataInput)
    {
        this.alignmentSide = input.readByte();
    }

}