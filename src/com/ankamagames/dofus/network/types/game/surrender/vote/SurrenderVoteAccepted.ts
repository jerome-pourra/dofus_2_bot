import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SurrenderVoteResponse } from "./SurrenderVoteResponse";

export class SurrenderVoteAccepted extends SurrenderVoteResponse implements INetworkType
{

	public static readonly protocolId: number = 8687;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SurrenderVoteAccepted.protocolId;
    }

    public isEndpointClient()
    {
        return SurrenderVoteAccepted.endpointClient;
    }

    public isEndpointServer()
    {
        return SurrenderVoteAccepted.endpointServer;
    }

    public initSurrenderVoteAccepted(): SurrenderVoteAccepted
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SurrenderVoteAccepted(output);
    }

    public serializeAs_SurrenderVoteAccepted(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderVoteAccepted(input);
    }

    private deserializeAs_SurrenderVoteAccepted(input: ICustomDataInput)
    {

    }

}