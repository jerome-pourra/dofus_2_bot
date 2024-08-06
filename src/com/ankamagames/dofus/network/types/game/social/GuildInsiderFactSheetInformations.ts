import { GuildRecruitmentInformation } from "./../guild/recruitment/GuildRecruitmentInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SocialEmblem } from "./SocialEmblem";
import { GuildFactSheetInformations } from "./GuildFactSheetInformations";

export class GuildInsiderFactSheetInformations extends GuildFactSheetInformations implements INetworkType
{

	public static readonly protocolId: number = 9836;

	public leaderName: string = "";

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GuildInsiderFactSheetInformations.protocolId;
    }

    public initGuildInsiderFactSheetInformations(guildId: number = 0, guildName: string = "", guildLevel: number = 0, guildEmblem: SocialEmblem = null, leaderId: number = 0, nbMembers: number = 0, lastActivityDay: number = 0, recruitment: GuildRecruitmentInformation = null, nbPendingApply: number = 0, leaderName: string = ""): GuildInsiderFactSheetInformations
    {
        super.initGuildFactSheetInformations(guildId,guildName,guildLevel,guildEmblem,leaderId,nbMembers,lastActivityDay,recruitment,nbPendingApply);
        this.leaderName = leaderName;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildInsiderFactSheetInformations(output);
    }

    public serializeAs_GuildInsiderFactSheetInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GuildFactSheetInformations(output);
        output.writeUTF(this.leaderName);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildInsiderFactSheetInformations(input);
    }

    private deserializeAs_GuildInsiderFactSheetInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._leaderNameFunc(input);
    }

    private _leaderNameFunc(input: ICustomDataInput)
    {
        this.leaderName = input.readUTF();
    }

}