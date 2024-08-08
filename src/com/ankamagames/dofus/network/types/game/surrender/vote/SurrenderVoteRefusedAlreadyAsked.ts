import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SurrenderVoteRefused } from "./SurrenderVoteRefused";

export class SurrenderVoteRefusedAlreadyAsked extends SurrenderVoteRefused implements INetworkType
{

	public static readonly protocolId: number = 8978;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SurrenderVoteRefusedAlreadyAsked.protocolId;
    }

    public isEndpointClient()
    {
        return SurrenderVoteRefusedAlreadyAsked.endpointClient;
    }

    public isEndpointServer()
    {
        return SurrenderVoteRefusedAlreadyAsked.endpointServer;
    }

    public initSurrenderVoteRefusedAlreadyAsked(): SurrenderVoteRefusedAlreadyAsked
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SurrenderVoteRefusedAlreadyAsked(output);
    }

    public serializeAs_SurrenderVoteRefusedAlreadyAsked(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderVoteRefusedAlreadyAsked(input);
    }

    private deserializeAs_SurrenderVoteRefusedAlreadyAsked(input: ICustomDataInput)
    {

    }

}