import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterLevelUpMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5797;

	public newLevel: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterLevelUpMessage.protocolId;
    }

    public initCharacterLevelUpMessage(newLevel: number = 0): CharacterLevelUpMessage
    {
        this.newLevel = newLevel;
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
        this.serializeAs_CharacterLevelUpMessage(output);
    }

    public serializeAs_CharacterLevelUpMessage(output: ICustomDataOutput)
    {
        if(this.newLevel < 0)
        {
            throw new Error("Forbidden value (" + this.newLevel + ") on element newLevel.");
        }
        output.writeVarShort(this.newLevel);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterLevelUpMessage(input);
    }

    private deserializeAs_CharacterLevelUpMessage(input: ICustomDataInput)
    {
        this._newLevelFunc(input);
    }

    private _newLevelFunc(input: ICustomDataInput)
    {
        this.newLevel = input.readVarUhShort();
        if(this.newLevel < 0)
        {
            throw new Error("Forbidden value (" + this.newLevel + ") on element of CharacterLevelUpMessage.newLevel.");
        }
    }

}