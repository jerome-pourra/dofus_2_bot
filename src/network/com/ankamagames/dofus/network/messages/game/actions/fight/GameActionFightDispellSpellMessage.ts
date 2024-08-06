import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameActionFightDispellMessage } from "./GameActionFightDispellMessage";

export class GameActionFightDispellSpellMessage extends GameActionFightDispellMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4714;

	public spellId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightDispellSpellMessage.protocolId;
    }

    public initGameActionFightDispellSpellMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, verboseCast: boolean = false, spellId: number = 0): GameActionFightDispellSpellMessage
    {
        super.initGameActionFightDispellMessage(actionId,sourceId,targetId,verboseCast);
        this.spellId = spellId;
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
        this.serializeAs_GameActionFightDispellSpellMessage(output);
    }

    public serializeAs_GameActionFightDispellSpellMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GameActionFightDispellMessage(output);
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
        }
        output.writeVarShort(this.spellId);
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