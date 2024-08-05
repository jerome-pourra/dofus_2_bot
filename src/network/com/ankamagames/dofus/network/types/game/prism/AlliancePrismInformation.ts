import { AllianceInformation } from "./../context/roleplay/AllianceInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { PrismInformation } from "./PrismInformation";

export class AlliancePrismInformation extends PrismInformation
{

	public static readonly protocolId: number = 4594;

	public alliance: AllianceInformation;

    public constructor()
    {
        super();
        this.alliance = new AllianceInformation();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AlliancePrismInformation(input);
    }

    private deserializeAs_AlliancePrismInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.alliance = new AllianceInformation();
        this.alliance.deserialize(input);
    }

}