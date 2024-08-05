import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildSubmitApplicationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2378;

	public applyText: string = "";
	public guildId: number = 0;
	public timeSpent: number = 0;
	public filterLanguage: string = "";
	public filterAmbiance: string = "";
	public filterPlaytime: string = "";
	public filterInterest: string = "";
	public filterMinMaxGuildLevel: string = "";
	public filterRecruitmentType: string = "";
	public filterMinMaxCharacterLevel: string = "";
	public filterMinMaxAchievement: string = "";
	public filterSearchName: string = "";
	public filterLastSort: string = "";

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildSubmitApplicationMessage(input);
    }

    private deserializeAs_GuildSubmitApplicationMessage(input: ICustomDataInput)
    {
        this._applyTextFunc(input);
        this._guildIdFunc(input);
        this._timeSpentFunc(input);
        this._filterLanguageFunc(input);
        this._filterAmbianceFunc(input);
        this._filterPlaytimeFunc(input);
        this._filterInterestFunc(input);
        this._filterMinMaxGuildLevelFunc(input);
        this._filterRecruitmentTypeFunc(input);
        this._filterMinMaxCharacterLevelFunc(input);
        this._filterMinMaxAchievementFunc(input);
        this._filterSearchNameFunc(input);
        this._filterLastSortFunc(input);
    }

    private _applyTextFunc(input: ICustomDataInput)
    {
        this.applyText = input.readUTF();
    }

    private _guildIdFunc(input: ICustomDataInput)
    {
        this.guildId = input.readVarUhInt();
        if(this.guildId < 0)
        {
            throw new Error("Forbidden value (" + this.guildId + ") on element of GuildSubmitApplicationMessage.guildId.");
        }
    }

    private _timeSpentFunc(input: ICustomDataInput)
    {
        this.timeSpent = input.readVarUhInt();
        if(this.timeSpent < 0)
        {
            throw new Error("Forbidden value (" + this.timeSpent + ") on element of GuildSubmitApplicationMessage.timeSpent.");
        }
    }

    private _filterLanguageFunc(input: ICustomDataInput)
    {
        this.filterLanguage = input.readUTF();
    }

    private _filterAmbianceFunc(input: ICustomDataInput)
    {
        this.filterAmbiance = input.readUTF();
    }

    private _filterPlaytimeFunc(input: ICustomDataInput)
    {
        this.filterPlaytime = input.readUTF();
    }

    private _filterInterestFunc(input: ICustomDataInput)
    {
        this.filterInterest = input.readUTF();
    }

    private _filterMinMaxGuildLevelFunc(input: ICustomDataInput)
    {
        this.filterMinMaxGuildLevel = input.readUTF();
    }

    private _filterRecruitmentTypeFunc(input: ICustomDataInput)
    {
        this.filterRecruitmentType = input.readUTF();
    }

    private _filterMinMaxCharacterLevelFunc(input: ICustomDataInput)
    {
        this.filterMinMaxCharacterLevel = input.readUTF();
    }

    private _filterMinMaxAchievementFunc(input: ICustomDataInput)
    {
        this.filterMinMaxAchievement = input.readUTF();
    }

    private _filterSearchNameFunc(input: ICustomDataInput)
    {
        this.filterSearchName = input.readUTF();
    }

    private _filterLastSortFunc(input: ICustomDataInput)
    {
        this.filterLastSort = input.readUTF();
    }

}