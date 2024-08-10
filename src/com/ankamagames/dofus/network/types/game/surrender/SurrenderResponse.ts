import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class SurrenderResponse implements INetworkType
{

	public static readonly protocolId: number = 8655;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {

    }

    public getTypeId()
    {
        return SurrenderResponse.protocolId;
    }

    public isEndpointClient()
    {
        return SurrenderResponse.endpointClient;
    }

    public isEndpointServer()
    {
        return SurrenderResponse.endpointServer;
    }

    public initSurrenderResponse(): SurrenderResponse
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SurrenderResponse(output);
    }

    public serializeAs_SurrenderResponse(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderResponse(input);
    }

    private deserializeAs_SurrenderResponse(input: ICustomDataInput)
    {

    }

}