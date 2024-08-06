import { CharacterMinimalInformations } from "./../character/CharacterMinimalInformations";
import { PlayerStatus } from "./../character/status/PlayerStatus";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class SocialMember extends CharacterMinimalInformations implements INetworkType
{

	public static readonly protocolId: number = 9920;

	public breed: number = 0;
	public sex: boolean = false;
	public connected: number = 99;
	public hoursSinceLastConnection: number = 0;
	public accountId: number = 0;
	public status: PlayerStatus;
	public rankId: number = 0;
	public enrollmentDate: number = 0;

    public constructor()
    {
        super();
        this.status = new PlayerStatus();
    }

    public getTypeId()
    {
        return SocialMember.protocolId;
    }

    public initSocialMember(id: number = 0, name: string = "", level: number = 0, breed: number = 0, sex: boolean = false, connected: number = 99, hoursSinceLastConnection: number = 0, accountId: number = 0, status: PlayerStatus = null, rankId: number = 0, enrollmentDate: number = 0): SocialMember
    {
        super.initCharacterMinimalInformations(id,name,level);
        this.breed = breed;
        this.sex = sex;
        this.connected = connected;
        this.hoursSinceLastConnection = hoursSinceLastConnection;
        this.accountId = accountId;
        this.status = status;
        this.rankId = rankId;
        this.enrollmentDate = enrollmentDate;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SocialMember(output);
    }

    public serializeAs_SocialMember(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterMinimalInformations(output);
        output.writeByte(this.breed);
        output.writeBoolean(this.sex);
        output.writeByte(this.connected);
        if(this.hoursSinceLastConnection < 0 || this.hoursSinceLastConnection > 65535)
        {
            throw new Error("Forbidden value (" + this.hoursSinceLastConnection + ") on element hoursSinceLastConnection.");
        }
        output.writeShort(this.hoursSinceLastConnection);
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
        }
        output.writeInt(this.accountId);
        output.writeShort(this.status.getTypeId());
        this.status.serialize(output);
        output.writeInt(this.rankId);
        if(this.enrollmentDate < -9007199254740992 || this.enrollmentDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.enrollmentDate + ") on element enrollmentDate.");
        }
        output.writeDouble(this.enrollmentDate);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SocialMember(input);
    }

    private deserializeAs_SocialMember(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._breedFunc(input);
        this._sexFunc(input);
        this._connectedFunc(input);
        this._hoursSinceLastConnectionFunc(input);
        this._accountIdFunc(input);
        let _id6: number = input.readUnsignedShort();
        this.status = ProtocolTypeManager.getInstance(PlayerStatus,_id6);
        this.status.deserialize(input);
        this._rankIdFunc(input);
        this._enrollmentDateFunc(input);
    }

    private _breedFunc(input: ICustomDataInput)
    {
        this.breed = input.readByte();
    }

    private _sexFunc(input: ICustomDataInput)
    {
        this.sex = input.readBoolean();
    }

    private _connectedFunc(input: ICustomDataInput)
    {
        this.connected = input.readByte();
        if(this.connected < 0)
        {
            throw new Error("Forbidden value (" + this.connected + ") on element of SocialMember.connected.");
        }
    }

    private _hoursSinceLastConnectionFunc(input: ICustomDataInput)
    {
        this.hoursSinceLastConnection = input.readUnsignedShort();
        if(this.hoursSinceLastConnection < 0 || this.hoursSinceLastConnection > 65535)
        {
            throw new Error("Forbidden value (" + this.hoursSinceLastConnection + ") on element of SocialMember.hoursSinceLastConnection.");
        }
    }

    private _accountIdFunc(input: ICustomDataInput)
    {
        this.accountId = input.readInt();
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element of SocialMember.accountId.");
        }
    }

    private _rankIdFunc(input: ICustomDataInput)
    {
        this.rankId = input.readInt();
    }

    private _enrollmentDateFunc(input: ICustomDataInput)
    {
        this.enrollmentDate = input.readDouble();
        if(this.enrollmentDate < -9007199254740992 || this.enrollmentDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.enrollmentDate + ") on element of SocialMember.enrollmentDate.");
        }
    }

}