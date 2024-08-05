import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class PortalInformation
{

	public static readonly protocolId: number = 2396;

	public portalId: number = 0;
	public areaId: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PortalInformation(input);
    }

    private deserializeAs_PortalInformation(input: ICustomDataInput)
    {
        this._portalIdFunc(input);
        this._areaIdFunc(input);
    }

    private _portalIdFunc(input: ICustomDataInput)
    {
        this.portalId = input.readInt();
    }

    private _areaIdFunc(input: ICustomDataInput)
    {
        this.areaId = input.readShort();
    }

}