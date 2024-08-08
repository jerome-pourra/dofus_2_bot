import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BasicAllianceInformations } from "./BasicAllianceInformations";

export class BasicNamedAllianceInformations extends BasicAllianceInformations implements INetworkType
{

	public static readonly protocolId: number = 5416;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public allianceName: string = "";

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return BasicNamedAllianceInformations.protocolId;
    }

    public isEndpointClient()
    {
        return BasicNamedAllianceInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return BasicNamedAllianceInformations.endpointServer;
    }

    public initBasicNamedAllianceInformations(allianceId: number = 0, allianceTag: string = "", allianceName: string = ""): BasicNamedAllianceInformations
    {
        super.initBasicAllianceInformations(allianceId,allianceTag);
        this.allianceName = allianceName;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_BasicNamedAllianceInformations(output);
    }

    public serializeAs_BasicNamedAllianceInformations(output: ICustomDataOutput)
    {
        super.serializeAs_BasicAllianceInformations(output);
        output.writeUTF(this.allianceName);
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