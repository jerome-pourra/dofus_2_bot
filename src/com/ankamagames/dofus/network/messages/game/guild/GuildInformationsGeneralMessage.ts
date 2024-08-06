import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildInformationsGeneralMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4406;

	public abandonnedPaddock: boolean = false;
	public level: number = 0;
	public expLevelFloor: number = 0;
	public experience: number = 0;
	public expNextLevelFloor: number = 0;
	public creationDate: number = 0;
	public score: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildInformationsGeneralMessage.protocolId;
    }

    public initGuildInformationsGeneralMessage(abandonnedPaddock: boolean = false, level: number = 0, expLevelFloor: number = 0, experience: number = 0, expNextLevelFloor: number = 0, creationDate: number = 0, score: number = 0): GuildInformationsGeneralMessage
    {
        this.abandonnedPaddock = abandonnedPaddock;
        this.level = level;
        this.expLevelFloor = expLevelFloor;
        this.experience = experience;
        this.expNextLevelFloor = expNextLevelFloor;
        this.creationDate = creationDate;
        this.score = score;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildInformationsGeneralMessage(output);
    }

    public serializeAs_GuildInformationsGeneralMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.abandonnedPaddock);
        if(this.level < 0 || this.level > 255)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeByte(this.level);
        if(this.expLevelFloor < 0 || this.expLevelFloor > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.expLevelFloor + ") on element expLevelFloor.");
        }
        output.writeVarLong(this.expLevelFloor);
        if(this.experience < 0 || this.experience > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experience + ") on element experience.");
        }
        output.writeVarLong(this.experience);
        if(this.expNextLevelFloor < 0 || this.expNextLevelFloor > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.expNextLevelFloor + ") on element expNextLevelFloor.");
        }
        output.writeVarLong(this.expNextLevelFloor);
        if(this.creationDate < 0)
        {
            throw new Error("Forbidden value (" + this.creationDate + ") on element creationDate.");
        }
        output.writeInt(this.creationDate);
        output.writeInt(this.score);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildInformationsGeneralMessage(input);
    }

    private deserializeAs_GuildInformationsGeneralMessage(input: ICustomDataInput)
    {
        this._abandonnedPaddockFunc(input);
        this._levelFunc(input);
        this._expLevelFloorFunc(input);
        this._experienceFunc(input);
        this._expNextLevelFloorFunc(input);
        this._creationDateFunc(input);
        this._scoreFunc(input);
    }

    private _abandonnedPaddockFunc(input: ICustomDataInput)
    {
        this.abandonnedPaddock = input.readBoolean();
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readUnsignedByte();
        if(this.level < 0 || this.level > 255)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of GuildInformationsGeneralMessage.level.");
        }
    }

    private _expLevelFloorFunc(input: ICustomDataInput)
    {
        this.expLevelFloor = input.readVarUhLong();
        if(this.expLevelFloor < 0 || this.expLevelFloor > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.expLevelFloor + ") on element of GuildInformationsGeneralMessage.expLevelFloor.");
        }
    }

    private _experienceFunc(input: ICustomDataInput)
    {
        this.experience = input.readVarUhLong();
        if(this.experience < 0 || this.experience > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experience + ") on element of GuildInformationsGeneralMessage.experience.");
        }
    }

    private _expNextLevelFloorFunc(input: ICustomDataInput)
    {
        this.expNextLevelFloor = input.readVarUhLong();
        if(this.expNextLevelFloor < 0 || this.expNextLevelFloor > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.expNextLevelFloor + ") on element of GuildInformationsGeneralMessage.expNextLevelFloor.");
        }
    }

    private _creationDateFunc(input: ICustomDataInput)
    {
        this.creationDate = input.readInt();
        if(this.creationDate < 0)
        {
            throw new Error("Forbidden value (" + this.creationDate + ") on element of GuildInformationsGeneralMessage.creationDate.");
        }
    }

    private _scoreFunc(input: ICustomDataInput)
    {
        this.score = input.readInt();
    }

}