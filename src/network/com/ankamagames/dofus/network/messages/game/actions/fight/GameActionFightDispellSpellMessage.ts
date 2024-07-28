import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameActionFightDispellMessage } from "./GameActionFightDispellMessage";

export class GameActionFightDispellSpellMessage extends GameActionFightDispellMessage
{

	public static readonly protocolId: number = 4714;

	public spellId: number = 0;

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
        this.deserializeAs_GameActionFightDispellSpellMessage(input);
    }

    private deserializeAs_GameActionFightDispellSpellMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._spellIdFunc(input);
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readVarUhShort();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of GameActionFightDispellSpellMessage.spellId.");
        }
    }

}