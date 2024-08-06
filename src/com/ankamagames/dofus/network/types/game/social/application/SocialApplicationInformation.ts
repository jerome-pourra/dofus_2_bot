import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { ApplicationPlayerInformation } from "./ApplicationPlayerInformation";

export class SocialApplicationInformation implements INetworkType
{

	public static readonly protocolId: number = 4014;

	public playerInfo: ApplicationPlayerInformation;
	public applyText: string = "";
	public creationDate: number = 0;

    public constructor()
    {
        this.playerInfo = new ApplicationPlayerInformation();
    }

    public getTypeId()
    {
        return SocialApplicationInformation.protocolId;
    }

    public initSocialApplicationInformation(playerInfo: ApplicationPlayerInformation = null, applyText: string = "", creationDate: number = 0): SocialApplicationInformation
    {
        this.playerInfo = playerInfo;
        this.applyText = applyText;
        this.creationDate = creationDate;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SocialApplicationInformation(output);
    }

    public serializeAs_SocialApplicationInformation(output: ICustomDataOutput)
    {
        this.playerInfo.serializeAs_ApplicationPlayerInformation(output);
        output.writeUTF(this.applyText);
        if(this.creationDate < -9007199254740992 || this.creationDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.creationDate + ") on element creationDate.");
        }
        output.writeDouble(this.creationDate);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SocialApplicationInformation(input);
    }

    private deserializeAs_SocialApplicationInformation(input: ICustomDataInput)
    {
        this.playerInfo = new ApplicationPlayerInformation();
        this.playerInfo.deserialize(input);
        this._applyTextFunc(input);
        this._creationDateFunc(input);
    }

    private _applyTextFunc(input: ICustomDataInput)
    {
        this.applyText = input.readUTF();
    }

    private _creationDateFunc(input: ICustomDataInput)
    {
        this.creationDate = input.readDouble();
        if(this.creationDate < -9007199254740992 || this.creationDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.creationDate + ") on element of SocialApplicationInformation.creationDate.");
        }
    }

}