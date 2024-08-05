import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildInformationsGeneralMessage extends NetworkMessage
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

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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