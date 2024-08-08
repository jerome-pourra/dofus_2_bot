import { AccountTagInformation } from "./../../common/AccountTagInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { AbstractContactInformations } from "./AbstractContactInformations";

export class IgnoredInformations extends AbstractContactInformations implements INetworkType
{

	public static readonly protocolId: number = 2099;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return IgnoredInformations.protocolId;
    }

    public isEndpointClient()
    {
        return IgnoredInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return IgnoredInformations.endpointServer;
    }

    public initIgnoredInformations(accountId: number = 0, accountTag: AccountTagInformation = null): IgnoredInformations
    {
        super.initAbstractContactInformations(accountId,accountTag);
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_IgnoredInformations(output);
    }

    public serializeAs_IgnoredInformations(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractContactInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IgnoredInformations(input);
    }

    private deserializeAs_IgnoredInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}