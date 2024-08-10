import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SurrenderResponse } from "./SurrenderResponse";

export class SurrenderAccepted extends SurrenderResponse implements INetworkType
{

	public static readonly protocolId: number = 8859;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SurrenderAccepted.protocolId;
    }

    public isEndpointClient()
    {
        return SurrenderAccepted.endpointClient;
    }

    public isEndpointServer()
    {
        return SurrenderAccepted.endpointServer;
    }

    public initSurrenderAccepted(): SurrenderAccepted
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SurrenderAccepted(output);
    }

    public serializeAs_SurrenderAccepted(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderAccepted(input);
    }

    private deserializeAs_SurrenderAccepted(input: ICustomDataInput)
    {

    }

}