import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterExperienceGainMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9701;

	public experienceCharacter: number = 0;
	public experienceMount: number = 0;
	public experienceGuild: number = 0;
	public experienceIncarnation: number = 0;

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
        this.deserializeAs_CharacterExperienceGainMessage(input);
    }

    private deserializeAs_CharacterExperienceGainMessage(input: ICustomDataInput)
    {
        this._experienceCharacterFunc(input);
        this._experienceMountFunc(input);
        this._experienceGuildFunc(input);
        this._experienceIncarnationFunc(input);
    }

    private _experienceCharacterFunc(input: ICustomDataInput)
    {
        this.experienceCharacter = input.readVarUhLong();
        if(this.experienceCharacter < 0 || this.experienceCharacter > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceCharacter + ") on element of CharacterExperienceGainMessage.experienceCharacter.");
        }
    }

    private _experienceMountFunc(input: ICustomDataInput)
    {
        this.experienceMount = input.readVarUhLong();
        if(this.experienceMount < 0 || this.experienceMount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceMount + ") on element of CharacterExperienceGainMessage.experienceMount.");
        }
    }

    private _experienceGuildFunc(input: ICustomDataInput)
    {
        this.experienceGuild = input.readVarUhLong();
        if(this.experienceGuild < 0 || this.experienceGuild > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceGuild + ") on element of CharacterExperienceGainMessage.experienceGuild.");
        }
    }

    private _experienceIncarnationFunc(input: ICustomDataInput)
    {
        this.experienceIncarnation = input.readVarUhLong();
        if(this.experienceIncarnation < 0 || this.experienceIncarnation > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceIncarnation + ") on element of CharacterExperienceGainMessage.experienceIncarnation.");
        }
    }

}