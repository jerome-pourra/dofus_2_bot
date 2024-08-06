import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameActionFightNoSpellCastMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 393;

	public spellLevelId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightNoSpellCastMessage.protocolId;
    }

    public initGameActionFightNoSpellCastMessage(spellLevelId: number = 0): GameActionFightNoSpellCastMessage
    {
        this.spellLevelId = spellLevelId;
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
        this.serializeAs_GameActionFightNoSpellCastMessage(output);
    }

    public serializeAs_GameActionFightNoSpellCastMessage(output: ICustomDataOutput)
    {
        if(this.spellLevelId < 0)
        {
            throw new Error("Forbidden value (" + this.spellLevelId + ") on element spellLevelId.");
        }
        output.writeVarInt(this.spellLevelId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightNoSpellCastMessage(input);
    }

    private deserializeAs_GameActionFightNoSpellCastMessage(input: ICustomDataInput)
    {
        this._spellLevelIdFunc(input);
    }

    private _spellLevelIdFunc(input: ICustomDataInput)
    {
        this.spellLevelId = input.readVarUhInt();
        if(this.spellLevelId < 0)
        {
            throw new Error("Forbidden value (" + this.spellLevelId + ") on element of GameActionFightNoSpellCastMessage.spellLevelId.");
        }
    }

}