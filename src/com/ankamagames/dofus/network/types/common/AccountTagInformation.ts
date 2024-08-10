import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../jerakine/network/INetworkType";

export class AccountTagInformation implements INetworkType
{

	public static readonly protocolId: number = 3196;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public nickname: string = "";
	public tagNumber: string = "";

    public constructor()
    {

    }

    public getTypeId()
    {
        return AccountTagInformation.protocolId;
    }

    public isEndpointClient()
    {
        return AccountTagInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return AccountTagInformation.endpointServer;
    }

    public initAccountTagInformation(nickname: string = "", tagNumber: string = ""): AccountTagInformation
    {
        this.nickname = nickname;
        this.tagNumber = tagNumber;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AccountTagInformation(output);
    }

    public serializeAs_AccountTagInformation(output: ICustomDataOutput)
    {
        output.writeUTF(this.nickname);
        output.writeUTF(this.tagNumber);
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