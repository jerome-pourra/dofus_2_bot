import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterReplayRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8786;

	public characterId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterReplayRequestMessage.protocolId;
    }

    public initCharacterReplayRequestMessage(characterId: number = 0): CharacterReplayRequestMessage
    {
        this.characterId = characterId;
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
        this.serializeAs_CharacterReplayRequestMessage(output);
    }

    public serializeAs_CharacterReplayRequestMessage(output: ICustomDataOutput)
    {
        if(this.characterId < 0 || this.characterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.characterId + ") on element characterId.");
        }
        output.writeVarLong(this.characterId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterReplayRequestMessage(input);
    }

    private deserializeAs_CharacterReplayRequestMessage(input: ICustomDataInput)
    {
        this._characterIdFunc(input);
    }

    private _characterIdFunc(input: ICustomDataInput)
    {
        this.characterId = input.readVarUhLong();
        if(this.characterId < 0 || this.characterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.characterId + ") on element of CharacterReplayRequestMessage.characterId.");
        }
    }

}