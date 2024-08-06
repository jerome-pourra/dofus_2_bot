import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BooleanByteWrapper } from "./../../../../../../jerakine/network/utils/BooleanByteWrapper";

export class SocialRecruitmentInformation implements INetworkType
{

	public static readonly protocolId: number = 2211;

	public socialId: number = 0;
	public recruitmentType: number = 0;
	public recruitmentTitle: string = "";
	public recruitmentText: string = "";
	public selectedLanguages: Array<number>;
	public selectedCriterion: Array<number>;
	public minLevel: number = 0;
	public minLevelFacultative: boolean = false;
	public invalidatedByModeration: boolean = false;
	public lastEditPlayerName: string = "";
	public lastEditDate: number = 0;
	public recruitmentAutoLocked: boolean = false;

    public constructor()
    {
        this.selectedLanguages = Array<number>();
        this.selectedCriterion = Array<number>();
    }

    public getTypeId()
    {
        return SocialRecruitmentInformation.protocolId;
    }

    public initSocialRecruitmentInformation(socialId: number = 0, recruitmentType: number = 0, recruitmentTitle: string = "", recruitmentText: string = "", selectedLanguages: Array<number> = null, selectedCriterion: Array<number> = null, minLevel: number = 0, minLevelFacultative: boolean = false, invalidatedByModeration: boolean = false, lastEditPlayerName: string = "", lastEditDate: number = 0, recruitmentAutoLocked: boolean = false): SocialRecruitmentInformation
    {
        this.socialId = socialId;
        this.recruitmentType = recruitmentType;
        this.recruitmentTitle = recruitmentTitle;
        this.recruitmentText = recruitmentText;
        this.selectedLanguages = selectedLanguages;
        this.selectedCriterion = selectedCriterion;
        this.minLevel = minLevel;
        this.minLevelFacultative = minLevelFacultative;
        this.invalidatedByModeration = invalidatedByModeration;
        this.lastEditPlayerName = lastEditPlayerName;
        this.lastEditDate = lastEditDate;
        this.recruitmentAutoLocked = recruitmentAutoLocked;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SocialRecruitmentInformation(output);
    }

    public serializeAs_SocialRecruitmentInformation(output: ICustomDataOutput)
    {
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.minLevelFacultative);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.invalidatedByModeration);
        _box0 = BooleanByteWrapper.setFlag(_box0,2,this.recruitmentAutoLocked);
        output.writeByte(_box0);
        if(this.socialId < 0)
        {
            throw new Error("Forbidden value (" + this.socialId + ") on element socialId.");
        }
        output.writeVarInt(this.socialId);
        output.writeByte(this.recruitmentType);
        output.writeUTF(this.recruitmentTitle);
        output.writeUTF(this.recruitmentText);
        output.writeShort(this.selectedLanguages.length);
        for(var _i5: number = 0; _i5 < this.selectedLanguages.length; _i5++)
        {
            if(this.selectedLanguages[_i5] < 0)
            {
                throw new Error("Forbidden value (" + this.selectedLanguages[_i5] + ") on element 5 (starting at 1) of selectedLanguages.");
            }
            output.writeVarInt(this.selectedLanguages[_i5]);
        }
        output.writeShort(this.selectedCriterion.length);
        for(var _i6: number = 0; _i6 < this.selectedCriterion.length; _i6++)
        {
            if(this.selectedCriterion[_i6] < 0)
            {
                throw new Error("Forbidden value (" + this.selectedCriterion[_i6] + ") on element 6 (starting at 1) of selectedCriterion.");
            }
            output.writeVarInt(this.selectedCriterion[_i6]);
        }
        if(this.minLevel < 0)
        {
            throw new Error("Forbidden value (" + this.minLevel + ") on element minLevel.");
        }
        output.writeShort(this.minLevel);
        output.writeUTF(this.lastEditPlayerName);
        if(this.lastEditDate < -9007199254740992 || this.lastEditDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.lastEditDate + ") on element lastEditDate.");
        }
        output.writeDouble(this.lastEditDate);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SocialRecruitmentInformation(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.minLevelFacultative = BooleanByteWrapper.getFlag(_box0,0);
        this.invalidatedByModeration = BooleanByteWrapper.getFlag(_box0,1);
        this.recruitmentAutoLocked = BooleanByteWrapper.getFlag(_box0,2);
    }

    private deserializeAs_SocialRecruitmentInformation(input: ICustomDataInput)
    {
        let _val5: number = 0;
        let _val6: number = 0;
        this.deserializeByteBoxes(input);
        this._socialIdFunc(input);
        this._recruitmentTypeFunc(input);
        this._recruitmentTitleFunc(input);
        this._recruitmentTextFunc(input);
        let _selectedLanguagesLen: number = input.readUnsignedShort();
        for(let _i5: number = 0; _i5 < _selectedLanguagesLen; _i5++)
        {
            _val5 = input.readVarUhInt();
            if(_val5 < 0)
            {
                throw new Error("Forbidden value (" + _val5 + ") on elements of selectedLanguages.");
            }
            this.selectedLanguages.push(_val5);
        }
        let _selectedCriterionLen: number = input.readUnsignedShort();
        for(let _i6: number = 0; _i6 < _selectedCriterionLen; _i6++)
        {
            _val6 = input.readVarUhInt();
            if(_val6 < 0)
            {
                throw new Error("Forbidden value (" + _val6 + ") on elements of selectedCriterion.");
            }
            this.selectedCriterion.push(_val6);
        }
        this._minLevelFunc(input);
        this._lastEditPlayerNameFunc(input);
        this._lastEditDateFunc(input);
    }

    private _socialIdFunc(input: ICustomDataInput)
    {
        this.socialId = input.readVarUhInt();
        if(this.socialId < 0)
        {
            throw new Error("Forbidden value (" + this.socialId + ") on element of SocialRecruitmentInformation.socialId.");
        }
    }

    private _recruitmentTypeFunc(input: ICustomDataInput)
    {
        this.recruitmentType = input.readByte();
        if(this.recruitmentType < 0)
        {
            throw new Error("Forbidden value (" + this.recruitmentType + ") on element of SocialRecruitmentInformation.recruitmentType.");
        }
    }

    private _recruitmentTitleFunc(input: ICustomDataInput)
    {
        this.recruitmentTitle = input.readUTF();
    }

    private _recruitmentTextFunc(input: ICustomDataInput)
    {
        this.recruitmentText = input.readUTF();
    }

    private _minLevelFunc(input: ICustomDataInput)
    {
        this.minLevel = input.readShort();
        if(this.minLevel < 0)
        {
            throw new Error("Forbidden value (" + this.minLevel + ") on element of SocialRecruitmentInformation.minLevel.");
        }
    }

    private _lastEditPlayerNameFunc(input: ICustomDataInput)
    {
        this.lastEditPlayerName = input.readUTF();
    }

    private _lastEditDateFunc(input: ICustomDataInput)
    {
        this.lastEditDate = input.readDouble();
        if(this.lastEditDate < -9007199254740992 || this.lastEditDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.lastEditDate + ") on element of SocialRecruitmentInformation.lastEditDate.");
        }
    }

}