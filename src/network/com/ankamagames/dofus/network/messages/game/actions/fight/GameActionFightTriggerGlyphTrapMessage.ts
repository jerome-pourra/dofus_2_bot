import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightTriggerGlyphTrapMessage extends AbstractGameActionMessage
{

	public static readonly protocolId: number = 6199;

	public markId: number = 0;
	public markImpactCell: number = 0;
	public triggeringCharacterId: number = 0;
	public triggeredSpellId: number = 0;

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
        this.deserializeAs_GameActionFightTriggerGlyphTrapMessage(input);
    }

    private deserializeAs_GameActionFightTriggerGlyphTrapMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._markIdFunc(input);
        this._markImpactCellFunc(input);
        this._triggeringCharacterIdFunc(input);
        this._triggeredSpellIdFunc(input);
    }

    private _markIdFunc(input: ICustomDataInput)
    {
        this.markId = input.readShort();
    }

    private _markImpactCellFunc(input: ICustomDataInput)
    {
        this.markImpactCell = input.readVarUhShort();
        if(this.markImpactCell < 0)
        {
            throw new Error("Forbidden value (" + this.markImpactCell + ") on element of GameActionFightTriggerGlyphTrapMessage.markImpactCell.");
        }
    }

    private _triggeringCharacterIdFunc(input: ICustomDataInput)
    {
        this.triggeringCharacterId = input.readDouble();
        if(this.triggeringCharacterId < -9007199254740992 || this.triggeringCharacterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.triggeringCharacterId + ") on element of GameActionFightTriggerGlyphTrapMessage.triggeringCharacterId.");
        }
    }

    private _triggeredSpellIdFunc(input: ICustomDataInput)
    {
        this.triggeredSpellId = input.readVarUhShort();
        if(this.triggeredSpellId < 0)
        {
            throw new Error("Forbidden value (" + this.triggeredSpellId + ") on element of GameActionFightTriggerGlyphTrapMessage.triggeredSpellId.");
        }
    }

}