import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { AllianceInformation } from "./AllianceInformation";
import { HumanOption } from "./HumanOption";

export class HumanOptionAlliance extends HumanOption
{

	public static readonly protocolId: number = 7953;

	public allianceInformation: AllianceInformation;
	public aggressable: number = 0;

    public constructor()
    {
        super();
        this.allianceInformation = new AllianceInformation();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HumanOptionAlliance(input);
    }

    private deserializeAs_HumanOptionAlliance(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.allianceInformation = new AllianceInformation();
        this.allianceInformation.deserialize(input);
        this._aggressableFunc(input);
    }

    private _aggressableFunc(input: ICustomDataInput)
    {
        this.aggressable = input.readByte();
        if(this.aggressable < 0)
        {
            throw new Error("Forbidden value (" + this.aggressable + ") on element of HumanOptionAlliance.aggressable.");
        }
    }

}