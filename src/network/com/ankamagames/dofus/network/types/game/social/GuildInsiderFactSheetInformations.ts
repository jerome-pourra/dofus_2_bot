import { GuildRecruitmentInformation } from "./../guild/recruitment/GuildRecruitmentInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { GuildFactSheetInformations } from "./GuildFactSheetInformations";

export class GuildInsiderFactSheetInformations extends GuildFactSheetInformations
{

	public static readonly protocolId: number = 9836;

	public leaderName: string = "";

    public constructor()
    {
        super();
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