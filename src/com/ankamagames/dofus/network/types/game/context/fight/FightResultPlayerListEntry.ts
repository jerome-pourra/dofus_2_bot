import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightResultAdditionalData } from "./FightResultAdditionalData";
import { FightLoot } from "./FightLoot";
import { FightResultFighterListEntry } from "./FightResultFighterListEntry";

export class FightResultPlayerListEntry extends FightResultFighterListEntry implements INetworkType
{

	public static readonly protocolId: number = 6813;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public level: number = 0;
	public additional: Array<FightResultAdditionalData>;

    public constructor()
    {
        super();
        this.additional = Array<FightResultAdditionalData>();
    }

    public getTypeId()
    {
        return FightResultPlayerListEntry.protocolId;
    }

    public isEndpointClient()
    {
        return FightResultPlayerListEntry.endpointClient;
    }

    public isEndpointServer()
    {
        return FightResultPlayerListEntry.endpointServer;
    }

    public initFightResultPlayerListEntry(outcome: number = 0, wave: number = 0, rewards: FightLoot = null, id: number = 0, alive: boolean = false, level: number = 0, additional: Array<FightResultAdditionalData> = null): FightResultPlayerListEntry
    {
        super.initFightResultFighterListEntry(outcome,wave,rewards,id,alive);
        this.level = level;
        this.additional = additional;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightResultPlayerListEntry(output);
    }

    public serializeAs_FightResultPlayerListEntry(output: ICustomDataOutput)
    {
        super.serializeAs_FightResultFighterListEntry(output);
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeVarShort(this.level);
        output.writeShort(this.additional.length);
        for(var _i2: number = 0; _i2 < this.additional.length; _i2++)
        {
            output.writeShort((this.additional[_i2] as FightResultAdditionalData).getTypeId());
            (this.additional[_i2] as FightResultAdditionalData).serialize(output);
        }
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