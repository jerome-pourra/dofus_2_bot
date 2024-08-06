import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BooleanByteWrapper } from "./../../../../../../jerakine/network/utils/BooleanByteWrapper";
import { FightResultAdditionalData } from "./FightResultAdditionalData";

export class FightResultExperienceData extends FightResultAdditionalData implements INetworkType
{

	public static readonly protocolId: number = 5571;

	public experience: number = 0;
	public showExperience: boolean = false;
	public experienceLevelFloor: number = 0;
	public showExperienceLevelFloor: boolean = false;
	public experienceNextLevelFloor: number = 0;
	public showExperienceNextLevelFloor: boolean = false;
	public experienceFightDelta: number = 0;
	public showExperienceFightDelta: boolean = false;
	public experienceForGuild: number = 0;
	public showExperienceForGuild: boolean = false;
	public experienceForMount: number = 0;
	public showExperienceForMount: boolean = false;
	public isIncarnationExperience: boolean = false;
	public rerollExperienceMul: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightResultExperienceData.protocolId;
    }

    public initFightResultExperienceData(experience: number = 0, showExperience: boolean = false, experienceLevelFloor: number = 0, showExperienceLevelFloor: boolean = false, experienceNextLevelFloor: number = 0, showExperienceNextLevelFloor: boolean = false, experienceFightDelta: number = 0, showExperienceFightDelta: boolean = false, experienceForGuild: number = 0, showExperienceForGuild: boolean = false, experienceForMount: number = 0, showExperienceForMount: boolean = false, isIncarnationExperience: boolean = false, rerollExperienceMul: number = 0): FightResultExperienceData
    {
        this.experience = experience;
        this.showExperience = showExperience;
        this.experienceLevelFloor = experienceLevelFloor;
        this.showExperienceLevelFloor = showExperienceLevelFloor;
        this.experienceNextLevelFloor = experienceNextLevelFloor;
        this.showExperienceNextLevelFloor = showExperienceNextLevelFloor;
        this.experienceFightDelta = experienceFightDelta;
        this.showExperienceFightDelta = showExperienceFightDelta;
        this.experienceForGuild = experienceForGuild;
        this.showExperienceForGuild = showExperienceForGuild;
        this.experienceForMount = experienceForMount;
        this.showExperienceForMount = showExperienceForMount;
        this.isIncarnationExperience = isIncarnationExperience;
        this.rerollExperienceMul = rerollExperienceMul;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightResultExperienceData(output);
    }

    public serializeAs_FightResultExperienceData(output: ICustomDataOutput)
    {
        super.serializeAs_FightResultAdditionalData(output);
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.showExperience);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.showExperienceLevelFloor);
        _box0 = BooleanByteWrapper.setFlag(_box0,2,this.showExperienceNextLevelFloor);
        _box0 = BooleanByteWrapper.setFlag(_box0,3,this.showExperienceFightDelta);
        _box0 = BooleanByteWrapper.setFlag(_box0,4,this.showExperienceForGuild);
        _box0 = BooleanByteWrapper.setFlag(_box0,5,this.showExperienceForMount);
        _box0 = BooleanByteWrapper.setFlag(_box0,6,this.isIncarnationExperience);
        output.writeByte(_box0);
        if(this.experience < 0 || this.experience > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experience + ") on element experience.");
        }
        output.writeVarLong(this.experience);
        if(this.experienceLevelFloor < 0 || this.experienceLevelFloor > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceLevelFloor + ") on element experienceLevelFloor.");
        }
        output.writeVarLong(this.experienceLevelFloor);
        if(this.experienceNextLevelFloor < 0 || this.experienceNextLevelFloor > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceNextLevelFloor + ") on element experienceNextLevelFloor.");
        }
        output.writeVarLong(this.experienceNextLevelFloor);
        if(this.experienceFightDelta < 0 || this.experienceFightDelta > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceFightDelta + ") on element experienceFightDelta.");
        }
        output.writeVarLong(this.experienceFightDelta);
        if(this.experienceForGuild < 0 || this.experienceForGuild > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceForGuild + ") on element experienceForGuild.");
        }
        output.writeVarLong(this.experienceForGuild);
        if(this.experienceForMount < 0 || this.experienceForMount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceForMount + ") on element experienceForMount.");
        }
        output.writeVarLong(this.experienceForMount);
        if(this.rerollExperienceMul < 0)
        {
            throw new Error("Forbidden value (" + this.rerollExperienceMul + ") on element rerollExperienceMul.");
        }
        output.writeByte(this.rerollExperienceMul);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightResultExperienceData(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.showExperience = BooleanByteWrapper.getFlag(_box0,0);
        this.showExperienceLevelFloor = BooleanByteWrapper.getFlag(_box0,1);
        this.showExperienceNextLevelFloor = BooleanByteWrapper.getFlag(_box0,2);
        this.showExperienceFightDelta = BooleanByteWrapper.getFlag(_box0,3);
        this.showExperienceForGuild = BooleanByteWrapper.getFlag(_box0,4);
        this.showExperienceForMount = BooleanByteWrapper.getFlag(_box0,5);
        this.isIncarnationExperience = BooleanByteWrapper.getFlag(_box0,6);
    }

    private deserializeAs_FightResultExperienceData(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.deserializeByteBoxes(input);
        this._experienceFunc(input);
        this._experienceLevelFloorFunc(input);
        this._experienceNextLevelFloorFunc(input);
        this._experienceFightDeltaFunc(input);
        this._experienceForGuildFunc(input);
        this._experienceForMountFunc(input);
        this._rerollExperienceMulFunc(input);
    }

    private _experienceFunc(input: ICustomDataInput)
    {
        this.experience = input.readVarUhLong();
        if(this.experience < 0 || this.experience > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experience + ") on element of FightResultExperienceData.experience.");
        }
    }

    private _experienceLevelFloorFunc(input: ICustomDataInput)
    {
        this.experienceLevelFloor = input.readVarUhLong();
        if(this.experienceLevelFloor < 0 || this.experienceLevelFloor > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceLevelFloor + ") on element of FightResultExperienceData.experienceLevelFloor.");
        }
    }

    private _experienceNextLevelFloorFunc(input: ICustomDataInput)
    {
        this.experienceNextLevelFloor = input.readVarUhLong();
        if(this.experienceNextLevelFloor < 0 || this.experienceNextLevelFloor > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceNextLevelFloor + ") on element of FightResultExperienceData.experienceNextLevelFloor.");
        }
    }

    private _experienceFightDeltaFunc(input: ICustomDataInput)
    {
        this.experienceFightDelta = input.readVarUhLong();
        if(this.experienceFightDelta < 0 || this.experienceFightDelta > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceFightDelta + ") on element of FightResultExperienceData.experienceFightDelta.");
        }
    }

    private _experienceForGuildFunc(input: ICustomDataInput)
    {
        this.experienceForGuild = input.readVarUhLong();
        if(this.experienceForGuild < 0 || this.experienceForGuild > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceForGuild + ") on element of FightResultExperienceData.experienceForGuild.");
        }
    }

    private _experienceForMountFunc(input: ICustomDataInput)
    {
        this.experienceForMount = input.readVarUhLong();
        if(this.experienceForMount < 0 || this.experienceForMount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceForMount + ") on element of FightResultExperienceData.experienceForMount.");
        }
    }

    private _rerollExperienceMulFunc(input: ICustomDataInput)
    {
        this.rerollExperienceMul = input.readByte();
        if(this.rerollExperienceMul < 0)
        {
            throw new Error("Forbidden value (" + this.rerollExperienceMul + ") on element of FightResultExperienceData.rerollExperienceMul.");
        }
    }

}