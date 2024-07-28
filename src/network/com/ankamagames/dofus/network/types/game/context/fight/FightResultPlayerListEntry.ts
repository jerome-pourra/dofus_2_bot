import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightResultAdditionalData } from "./FightResultAdditionalData";
import { FightResultFighterListEntry } from "./FightResultFighterListEntry";

export class FightResultPlayerListEntry extends FightResultFighterListEntry
{

	public static readonly protocolId: number = 6813;

	public level: number = 0;
	public additional: Array<FightResultAdditionalData>;

    public constructor()
    {
        super();
        this.additional = Array<FightResultAdditionalData>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightResultPlayerListEntry(input);
    }

    private deserializeAs_FightResultPlayerListEntry(input: ICustomDataInput)
    {
        let _id2: number = 0;
        let _item2: FightResultAdditionalData;
        super.deserialize(input);
        this._levelFunc(input);
        let _additionalLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _additionalLen; _i2++)
        {
            _id2 = input.readUnsignedShort();
            _item2 = ProtocolTypeManager.getInstance(FightResultAdditionalData,_id2);
            _item2.deserialize(input);
            this.additional.push(_item2);
        }
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readVarUhShort();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of FightResultPlayerListEntry.level.");
        }
    }

}