import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BasicAllianceInformations } from "./BasicAllianceInformations";

export class BasicNamedAllianceInformations extends BasicAllianceInformations
{

	public static readonly protocolId: number = 5416;

	public allianceName: string = "";

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BasicNamedAllianceInformations(input);
    }

    private deserializeAs_BasicNamedAllianceInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._allianceNameFunc(input);
    }

    private _allianceNameFunc(input: ICustomDataInput)
    {
        this.allianceName = input.readUTF();
    }

}