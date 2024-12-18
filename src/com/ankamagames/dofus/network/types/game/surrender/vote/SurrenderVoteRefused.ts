import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SurrenderVoteResponse } from "./SurrenderVoteResponse";

export class SurrenderVoteRefused extends SurrenderVoteResponse implements INetworkType
{

	public static readonly protocolId: number = 1140;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SurrenderVoteRefused.protocolId;
    }

    public isEndpointClient()
    {
        return SurrenderVoteRefused.endpointClient;
    }

    public isEndpointServer()
    {
        return SurrenderVoteRefused.endpointServer;
    }

    public initSurrenderVoteRefused(): SurrenderVoteRefused
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SurrenderVoteRefused(output);
    }

    public serializeAs_SurrenderVoteRefused(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderVoteRefused(input);
    }

    private deserializeAs_SurrenderVoteRefused(input: ICustomDataInput)
    {

    }

}