import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class PortalInformation implements INetworkType
{

	public static readonly protocolId: number = 2396;

	public portalId: number = 0;
	public areaId: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return PortalInformation.protocolId;
    }

    public initPortalInformation(portalId: number = 0, areaId: number = 0): PortalInformation
    {
        this.portalId = portalId;
        this.areaId = areaId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PortalInformation(output);
    }

    public serializeAs_PortalInformation(output: ICustomDataOutput)
    {
        output.writeInt(this.portalId);
        output.writeShort(this.areaId);
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