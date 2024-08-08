import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class SurrenderVoteResponse implements INetworkType
{

	public static readonly protocolId: number = 3674;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {

    }

    public getTypeId()
    {
        return SurrenderVoteResponse.protocolId;
    }

    public isEndpointClient()
    {
        return SurrenderVoteResponse.endpointClient;
    }

    public isEndpointServer()
    {
        return SurrenderVoteResponse.endpointServer;
    }

    public initSurrenderVoteResponse(): SurrenderVoteResponse
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SurrenderVoteResponse(output);
    }

    public serializeAs_SurrenderVoteResponse(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderVoteResponse(input);
    }

    private deserializeAs_SurrenderVoteResponse(input: ICustomDataInput)
    {

    }

}