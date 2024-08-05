import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameActionFightNoSpellCastMessage extends NetworkMessage
{

	public static readonly protocolId: number = 393;

	public spellLevelId: number = 0;

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