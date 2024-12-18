import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightResultAdditionalData } from "./FightResultAdditionalData";

export class FightResultPvpData extends FightResultAdditionalData implements INetworkType
{

	public static readonly protocolId: number = 7233;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public grade: number = 0;
	public minHonorForGrade: number = 0;
	public maxHonorForGrade: number = 0;
	public honor: number = 0;
	public honorDelta: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightResultPvpData.protocolId;
    }

    public isEndpointClient()
    {
        return FightResultPvpData.endpointClient;
    }

    public isEndpointServer()
    {
        return FightResultPvpData.endpointServer;
    }

    public initFightResultPvpData(grade: number = 0, minHonorForGrade: number = 0, maxHonorForGrade: number = 0, honor: number = 0, honorDelta: number = 0): FightResultPvpData
    {
        this.grade = grade;
        this.minHonorForGrade = minHonorForGrade;
        this.maxHonorForGrade = maxHonorForGrade;
        this.honor = honor;
        this.honorDelta = honorDelta;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightResultPvpData(output);
    }

    public serializeAs_FightResultPvpData(output: ICustomDataOutput)
    {
        super.serializeAs_FightResultAdditionalData(output);
        if(this.grade < 0 || this.grade > 255)
        {
            throw new Error("Forbidden value (" + this.grade + ") on element grade.");
        }
        output.writeByte(this.grade);
        if(this.minHonorForGrade < 0 || this.minHonorForGrade > 20000)
        {
            throw new Error("Forbidden value (" + this.minHonorForGrade + ") on element minHonorForGrade.");
        }
        output.writeVarShort(this.minHonorForGrade);
        if(this.maxHonorForGrade < 0 || this.maxHonorForGrade > 20000)
        {
            throw new Error("Forbidden value (" + this.maxHonorForGrade + ") on element maxHonorForGrade.");
        }
        output.writeVarShort(this.maxHonorForGrade);
        if(this.honor < 0 || this.honor > 20000)
        {
            throw new Error("Forbidden value (" + this.honor + ") on element honor.");
        }
        output.writeVarShort(this.honor);
        output.writeVarShort(this.honorDelta);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightResultPvpData(input);
    }

    private deserializeAs_FightResultPvpData(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._gradeFunc(input);
        this._minHonorForGradeFunc(input);
        this._maxHonorForGradeFunc(input);
        this._honorFunc(input);
        this._honorDeltaFunc(input);
    }

    private _gradeFunc(input: ICustomDataInput)
    {
        this.grade = input.readUnsignedByte();
        if(this.grade < 0 || this.grade > 255)
        {
            throw new Error("Forbidden value (" + this.grade + ") on element of FightResultPvpData.grade.");
        }
    }

    private _minHonorForGradeFunc(input: ICustomDataInput)
    {
        this.minHonorForGrade = input.readVarUhShort();
        if(this.minHonorForGrade < 0 || this.minHonorForGrade > 20000)
        {
            throw new Error("Forbidden value (" + this.minHonorForGrade + ") on element of FightResultPvpData.minHonorForGrade.");
        }
    }

    private _maxHonorForGradeFunc(input: ICustomDataInput)
    {
        this.maxHonorForGrade = input.readVarUhShort();
        if(this.maxHonorForGrade < 0 || this.maxHonorForGrade > 20000)
        {
            throw new Error("Forbidden value (" + this.maxHonorForGrade + ") on element of FightResultPvpData.maxHonorForGrade.");
        }
    }

    private _honorFunc(input: ICustomDataInput)
    {
        this.honor = input.readVarUhShort();
        if(this.honor < 0 || this.honor > 20000)
        {
            throw new Error("Forbidden value (" + this.honor + ") on element of FightResultPvpData.honor.");
        }
    }

    private _honorDeltaFunc(input: ICustomDataInput)
    {
        this.honorDelta = input.readVarShort();
    }

}