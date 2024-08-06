import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildSubmitApplicationMessage extends NetworkMessage implements INetworkMessage
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

    public getMessageId()
    {
        return GuildSubmitApplicationMessage.protocolId;
    }

    public initGuildSubmitApplicationMessage(applyText: string = "", guildId: number = 0, timeSpent: number = 0, filterLanguage: string = "", filterAmbiance: string = "", filterPlaytime: string = "", filterInterest: string = "", filterMinMaxGuildLevel: string = "", filterRecruitmentType: string = "", filterMinMaxCharacterLevel: string = "", filterMinMaxAchievement: string = "", filterSearchName: string = "", filterLastSort: string = ""): GuildSubmitApplicationMessage
    {
        this.applyText = applyText;
        this.guildId = guildId;
        this.timeSpent = timeSpent;
        this.filterLanguage = filterLanguage;
        this.filterAmbiance = filterAmbiance;
        this.filterPlaytime = filterPlaytime;
        this.filterInterest = filterInterest;
        this.filterMinMaxGuildLevel = filterMinMaxGuildLevel;
        this.filterRecruitmentType = filterRecruitmentType;
        this.filterMinMaxCharacterLevel = filterMinMaxCharacterLevel;
        this.filterMinMaxAchievement = filterMinMaxAchievement;
        this.filterSearchName = filterSearchName;
        this.filterLastSort = filterLastSort;
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
        this.serializeAs_GuildSubmitApplicationMessage(output);
    }

    public serializeAs_GuildSubmitApplicationMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.applyText);
        if(this.guildId < 0)
        {
            throw new Error("Forbidden value (" + this.guildId + ") on element guildId.");
        }
        output.writeVarInt(this.guildId);
        if(this.timeSpent < 0)
        {
            throw new Error("Forbidden value (" + this.timeSpent + ") on element timeSpent.");
        }
        output.writeVarInt(this.timeSpent);
        output.writeUTF(this.filterLanguage);
        output.writeUTF(this.filterAmbiance);
        output.writeUTF(this.filterPlaytime);
        output.writeUTF(this.filterInterest);
        output.writeUTF(this.filterMinMaxGuildLevel);
        output.writeUTF(this.filterRecruitmentType);
        output.writeUTF(this.filterMinMaxCharacterLevel);
        output.writeUTF(this.filterMinMaxAchievement);
        output.writeUTF(this.filterSearchName);
        output.writeUTF(this.filterLastSort);
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