import { SpellModifierMessage } from "./../../../../types/game/character/spellmodifier/SpellModifierMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ApplySpellModifierMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1373;

	public actorId: number = 0;
	public modifier: SpellModifierMessage;

    public constructor()
    {
        super();
        this.modifier = new SpellModifierMessage();
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
        this.deserializeAs_ApplySpellModifierMessage(input);
    }

    private deserializeAs_ApplySpellModifierMessage(input: ICustomDataInput)
    {
        this._actorIdFunc(input);
        this.modifier = new SpellModifierMessage();
        this.modifier.deserialize(input);
    }

    private _actorIdFunc(input: ICustomDataInput)
    {
        this.actorId = input.readDouble();
        if(this.actorId < -9007199254740992 || this.actorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.actorId + ") on element of ApplySpellModifierMessage.actorId.");
        }
    }

}