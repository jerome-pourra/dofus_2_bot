import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { AbstractGameActionFightTargetedAbilityMessage } from "./AbstractGameActionFightTargetedAbilityMessage";

export class GameActionFightSpellCastMessage extends AbstractGameActionFightTargetedAbilityMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2679;

	public spellId: number = 0;
	public spellLevel: number = 0;
	public portalsIds: Array<number>;

    public constructor()
    {
        super();
        this.portalsIds = Array<number>();
    }

    public getMessageId()
    {
        return GameActionFightSpellCastMessage.protocolId;
    }

    public initGameActionFightSpellCastMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, destinationCellId: number = 0, critical: number = 1, silentCast: boolean = false, verboseCast: boolean = false, spellId: number = 0, spellLevel: number = 0, portalsIds: Array<number> = null): GameActionFightSpellCastMessage
    {
        super.initAbstractGameActionFightTargetedAbilityMessage(actionId,sourceId,targetId,destinationCellId,critical,silentCast,verboseCast);
        this.spellId = spellId;
        this.spellLevel = spellLevel;
        this.portalsIds = portalsIds;
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
        this.serializeAs_GameActionFightSpellCastMessage(output);
    }

    public serializeAs_GameActionFightSpellCastMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionFightTargetedAbilityMessage(output);
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
        }
        output.writeVarShort(this.spellId);
        if(this.spellLevel < 1 || this.spellLevel > 32767)
        {
            throw new Error("Forbidden value (" + this.spellLevel + ") on element spellLevel.");
        }
        output.writeShort(this.spellLevel);
        output.writeShort(this.portalsIds.length);
        for(var _i3: number = 0; _i3 < this.portalsIds.length; _i3++)
        {
            output.writeShort(this.portalsIds[_i3]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightSpellCastMessage(input);
    }

    private deserializeAs_GameActionFightSpellCastMessage(input: ICustomDataInput)
    {
        let _val3: number = 0;
        super.deserialize(input);
        this._spellIdFunc(input);
        this._spellLevelFunc(input);
        let _portalsIdsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _portalsIdsLen; _i3++)
        {
            _val3 = input.readShort();
            this.portalsIds.push(_val3);
        }
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readVarUhShort();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of GameActionFightSpellCastMessage.spellId.");
        }
    }

    private _spellLevelFunc(input: ICustomDataInput)
    {
        this.spellLevel = input.readShort();
        if(this.spellLevel < 1 || this.spellLevel > 32767)
        {
            throw new Error("Forbidden value (" + this.spellLevel + ") on element of GameActionFightSpellCastMessage.spellLevel.");
        }
    }

}