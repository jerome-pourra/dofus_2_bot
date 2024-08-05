import { AllianceRecruitmentInformation } from "./../alliance/recruitment/AllianceRecruitmentInformation";
import { AllianceInformation } from "./../context/roleplay/AllianceInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class AllianceFactSheetInformation extends AllianceInformation
{

	public static readonly protocolId: number = 6340;

	public creationDate: number = 0;
	public nbMembers: number = 0;
	public nbSubarea: number = 0;
	public nbTaxCollectors: number = 0;
	public recruitment: AllianceRecruitmentInformation;

    public constructor()
    {
        super();
        this.recruitment = new AllianceRecruitmentInformation();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceFactSheetInformation(input);
    }

    private deserializeAs_AllianceFactSheetInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._creationDateFunc(input);
        this._nbMembersFunc(input);
        this._nbSubareaFunc(input);
        this._nbTaxCollectorsFunc(input);
        this.recruitment = new AllianceRecruitmentInformation();
        this.recruitment.deserialize(input);
    }

    private _creationDateFunc(input: ICustomDataInput)
    {
        this.creationDate = input.readInt();
        if(this.creationDate < 0)
        {
            throw new Error("Forbidden value (" + this.creationDate + ") on element of AllianceFactSheetInformation.creationDate.");
        }
    }

    private _nbMembersFunc(input: ICustomDataInput)
    {
        this.nbMembers = input.readVarUhShort();
        if(this.nbMembers < 0)
        {
            throw new Error("Forbidden value (" + this.nbMembers + ") on element of AllianceFactSheetInformation.nbMembers.");
        }
    }

    private _nbSubareaFunc(input: ICustomDataInput)
    {
        this.nbSubarea = input.readVarUhShort();
        if(this.nbSubarea < 0)
        {
            throw new Error("Forbidden value (" + this.nbSubarea + ") on element of AllianceFactSheetInformation.nbSubarea.");
        }
    }

    private _nbTaxCollectorsFunc(input: ICustomDataInput)
    {
        this.nbTaxCollectors = input.readVarUhShort();
        if(this.nbTaxCollectors < 0)
        {
            throw new Error("Forbidden value (" + this.nbTaxCollectors + ") on element of AllianceFactSheetInformation.nbTaxCollectors.");
        }
    }

}