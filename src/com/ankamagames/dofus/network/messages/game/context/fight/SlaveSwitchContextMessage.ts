import { CharacterCharacteristicsInformations } from "./../../../../types/game/character/characteristic/CharacterCharacteristicsInformations";
import { SpellItem } from "./../../../../types/game/data/items/SpellItem";
import { Shortcut } from "./../../../../types/game/shortcut/Shortcut";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SlaveSwitchContextMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 974;

	public masterId: number = 0;
	public slaveId: number = 0;
	public slaveTurn: number = 0;
	public slaveSpells: Array<SpellItem>;
	public slaveStats: CharacterCharacteristicsInformations;
	public shortcuts: Array<Shortcut>;

    public constructor()
    {
        super();
        this.slaveSpells = Array<SpellItem>();
        this.slaveStats = new CharacterCharacteristicsInformations();
        this.shortcuts = Array<Shortcut>();
    }

    public getMessageId()
    {
        return SlaveSwitchContextMessage.protocolId;
    }

    public initSlaveSwitchContextMessage(masterId: number = 0, slaveId: number = 0, slaveTurn: number = 0, slaveSpells: Array<SpellItem> = null, slaveStats: CharacterCharacteristicsInformations = null, shortcuts: Array<Shortcut> = null): SlaveSwitchContextMessage
    {
        this.masterId = masterId;
        this.slaveId = slaveId;
        this.slaveTurn = slaveTurn;
        this.slaveSpells = slaveSpells;
        this.slaveStats = slaveStats;
        this.shortcuts = shortcuts;
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
        this.serializeAs_SlaveSwitchContextMessage(output);
    }

    public serializeAs_SlaveSwitchContextMessage(output: ICustomDataOutput)
    {
        if(this.masterId < -9007199254740992 || this.masterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.masterId + ") on element masterId.");
        }
        output.writeDouble(this.masterId);
        if(this.slaveId < -9007199254740992 || this.slaveId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.slaveId + ") on element slaveId.");
        }
        output.writeDouble(this.slaveId);
        if(this.slaveTurn < 0)
        {
            throw new Error("Forbidden value (" + this.slaveTurn + ") on element slaveTurn.");
        }
        output.writeVarShort(this.slaveTurn);
        output.writeShort(this.slaveSpells.length);
        for(var _i4: number = 0; _i4 < this.slaveSpells.length; _i4++)
        {
            (this.slaveSpells[_i4] as SpellItem).serializeAs_SpellItem(output);
        }
        this.slaveStats.serializeAs_CharacterCharacteristicsInformations(output);
        output.writeShort(this.shortcuts.length);
        for(var _i6: number = 0; _i6 < this.shortcuts.length; _i6++)
        {
            output.writeShort((this.shortcuts[_i6] as Shortcut).getTypeId());
            (this.shortcuts[_i6] as Shortcut).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SlaveSwitchContextMessage(input);
    }

    private deserializeAs_SlaveSwitchContextMessage(input: ICustomDataInput)
    {
        let _item4: SpellItem;
        let _id6: number = 0;
        let _item6: Shortcut;
        this._masterIdFunc(input);
        this._slaveIdFunc(input);
        this._slaveTurnFunc(input);
        let _slaveSpellsLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _slaveSpellsLen; _i4++)
        {
            _item4 = new SpellItem();
            _item4.deserialize(input);
            this.slaveSpells.push(_item4);
        }
        this.slaveStats = new CharacterCharacteristicsInformations();
        this.slaveStats.deserialize(input);
        let _shortcutsLen: number = input.readUnsignedShort();
        for(let _i6: number = 0; _i6 < _shortcutsLen; _i6++)
        {
            _id6 = input.readUnsignedShort();
            _item6 = ProtocolTypeManager.getInstance(Shortcut,_id6);
            _item6.deserialize(input);
            this.shortcuts.push(_item6);
        }
    }

    private _masterIdFunc(input: ICustomDataInput)
    {
        this.masterId = input.readDouble();
        if(this.masterId < -9007199254740992 || this.masterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.masterId + ") on element of SlaveSwitchContextMessage.masterId.");
        }
    }

    private _slaveIdFunc(input: ICustomDataInput)
    {
        this.slaveId = input.readDouble();
        if(this.slaveId < -9007199254740992 || this.slaveId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.slaveId + ") on element of SlaveSwitchContextMessage.slaveId.");
        }
    }

    private _slaveTurnFunc(input: ICustomDataInput)
    {
        this.slaveTurn = input.readVarUhShort();
        if(this.slaveTurn < 0)
        {
            throw new Error("Forbidden value (" + this.slaveTurn + ") on element of SlaveSwitchContextMessage.slaveTurn.");
        }
    }

}