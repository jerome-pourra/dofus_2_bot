import { SocialRecruitmentInformation } from "./../../social/recruitment/SocialRecruitmentInformation";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class GuildRecruitmentInformation extends SocialRecruitmentInformation
{

	public static readonly protocolId: number = 5578;

	public minSuccess: number = 0;
	public minSuccessFacultative: boolean = false;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildRecruitmentInformation(input);
    }

    private deserializeAs_GuildRecruitmentInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._minSuccessFunc(input);
        this._minSuccessFacultativeFunc(input);
    }

    private _minSuccessFunc(input: ICustomDataInput)
    {
        this.minSuccess = input.readVarUhInt();
        if(this.minSuccess < 0)
        {
            throw new Error("Forbidden value (" + this.minSuccess + ") on element of GuildRecruitmentInformation.minSuccess.");
        }
    }

    private _minSuccessFacultativeFunc(input: ICustomDataInput)
    {
        this.minSuccessFacultative = input.readBoolean();
    }

}