import { AllianceInformation } from "./roleplay/AllianceInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class TaxCollectorStaticInformations
{

	public static readonly protocolId: number = 1672;

	public firstNameId: number = 0;
	public lastNameId: number = 0;
	public allianceIdentity: AllianceInformation;
	public callerId: number = 0;
	public uid: string = "";

    public constructor()
    {
        this.allianceIdentity = new AllianceInformation();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorStaticInformations(input);
    }

    private deserializeAs_TaxCollectorStaticInformations(input: ICustomDataInput)
    {
        this._firstNameIdFunc(input);
        this._lastNameIdFunc(input);
        this.allianceIdentity = new AllianceInformation();
        this.allianceIdentity.deserialize(input);
        this._callerIdFunc(input);
        this._uidFunc(input);
    }

    private _firstNameIdFunc(input: ICustomDataInput)
    {
        this.firstNameId = input.readVarUhShort();
        if(this.firstNameId < 0)
        {
            throw new Error("Forbidden value (" + this.firstNameId + ") on element of TaxCollectorStaticInformations.firstNameId.");
        }
    }

    private _lastNameIdFunc(input: ICustomDataInput)
    {
        this.lastNameId = input.readVarUhShort();
        if(this.lastNameId < 0)
        {
            throw new Error("Forbidden value (" + this.lastNameId + ") on element of TaxCollectorStaticInformations.lastNameId.");
        }
    }

    private _callerIdFunc(input: ICustomDataInput)
    {
        this.callerId = input.readVarUhLong();
        if(this.callerId < 0 || this.callerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.callerId + ") on element of TaxCollectorStaticInformations.callerId.");
        }
    }

    private _uidFunc(input: ICustomDataInput)
    {
        this.uid = input.readUTF();
    }

}