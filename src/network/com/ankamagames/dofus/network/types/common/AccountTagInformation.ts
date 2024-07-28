import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../jerakine/network/INetworkType";

export class AccountTagInformation
{

	public static readonly protocolId: number = 3196;

	public nickname: string = "";
	public tagNumber: string = "";

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AccountTagInformation(input);
    }

    private deserializeAs_AccountTagInformation(input: ICustomDataInput)
    {
        this._nicknameFunc(input);
        this._tagNumberFunc(input);
    }

    private _nicknameFunc(input: ICustomDataInput)
    {
        this.nickname = input.readUTF();
    }

    private _tagNumberFunc(input: ICustomDataInput)
    {
        this.tagNumber = input.readUTF();
    }

}