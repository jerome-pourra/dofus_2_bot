import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { ActorAlignmentInformations } from "./ActorAlignmentInformations";

export class ActorExtendedAlignmentInformations extends ActorAlignmentInformations implements INetworkType
{

	public static readonly protocolId: number = 4048;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public honor: number = 0;
	public honorGradeFloor: number = 0;
	public honorNextGradeFloor: number = 0;
	public aggressable: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ActorExtendedAlignmentInformations.protocolId;
    }

    public isEndpointClient()
    {
        return ActorExtendedAlignmentInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return ActorExtendedAlignmentInformations.endpointServer;
    }

    public initActorExtendedAlignmentInformations(alignmentSide: number = 0, alignmentValue: number = 0, alignmentGrade: number = 0, characterPower: number = 0, honor: number = 0, honorGradeFloor: number = 0, honorNextGradeFloor: number = 0, aggressable: number = 0): ActorExtendedAlignmentInformations
    {
        super.initActorAlignmentInformations(alignmentSide,alignmentValue,alignmentGrade,characterPower);
        this.honor = honor;
        this.honorGradeFloor = honorGradeFloor;
        this.honorNextGradeFloor = honorNextGradeFloor;
        this.aggressable = aggressable;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ActorExtendedAlignmentInformations(output);
    }

    public serializeAs_ActorExtendedAlignmentInformations(output: ICustomDataOutput)
    {
        super.serializeAs_ActorAlignmentInformations(output);
        if(this.honor < 0 || this.honor > 20000)
        {
            throw new Error("Forbidden value (" + this.honor + ") on element honor.");
        }
        output.writeVarShort(this.honor);
        if(this.honorGradeFloor < 0 || this.honorGradeFloor > 20000)
        {
            throw new Error("Forbidden value (" + this.honorGradeFloor + ") on element honorGradeFloor.");
        }
        output.writeVarShort(this.honorGradeFloor);
        if(this.honorNextGradeFloor < 0 || this.honorNextGradeFloor > 20000)
        {
            throw new Error("Forbidden value (" + this.honorNextGradeFloor + ") on element honorNextGradeFloor.");
        }
        output.writeVarShort(this.honorNextGradeFloor);
        output.writeByte(this.aggressable);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ActorExtendedAlignmentInformations(input);
    }

    private deserializeAs_ActorExtendedAlignmentInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._honorFunc(input);
        this._honorGradeFloorFunc(input);
        this._honorNextGradeFloorFunc(input);
        this._aggressableFunc(input);
    }

    private _honorFunc(input: ICustomDataInput)
    {
        this.honor = input.readVarUhShort();
        if(this.honor < 0 || this.honor > 20000)
        {
            throw new Error("Forbidden value (" + this.honor + ") on element of ActorExtendedAlignmentInformations.honor.");
        }
    }

    private _honorGradeFloorFunc(input: ICustomDataInput)
    {
        this.honorGradeFloor = input.readVarUhShort();
        if(this.honorGradeFloor < 0 || this.honorGradeFloor > 20000)
        {
            throw new Error("Forbidden value (" + this.honorGradeFloor + ") on element of ActorExtendedAlignmentInformations.honorGradeFloor.");
        }
    }

    private _honorNextGradeFloorFunc(input: ICustomDataInput)
    {
        this.honorNextGradeFloor = input.readVarUhShort();
        if(this.honorNextGradeFloor < 0 || this.honorNextGradeFloor > 20000)
        {
            throw new Error("Forbidden value (" + this.honorNextGradeFloor + ") on element of ActorExtendedAlignmentInformations.honorNextGradeFloor.");
        }
    }

    private _aggressableFunc(input: ICustomDataInput)
    {
        this.aggressable = input.readByte();
        if(this.aggressable < 0)
        {
            throw new Error("Forbidden value (" + this.aggressable + ") on element of ActorExtendedAlignmentInformations.aggressable.");
        }
    }

}