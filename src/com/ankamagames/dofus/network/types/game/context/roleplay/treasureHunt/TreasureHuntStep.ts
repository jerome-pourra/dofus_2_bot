import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class TreasureHuntStep implements INetworkType
{

	public static readonly protocolId: number = 8185;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {

    }

    public getTypeId()
    {
        return TreasureHuntStep.protocolId;
    }

    public isEndpointClient()
    {
        return TreasureHuntStep.endpointClient;
    }

    public isEndpointServer()
    {
        return TreasureHuntStep.endpointServer;
    }

    public initTreasureHuntStep(): TreasureHuntStep
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TreasureHuntStep(output);
    }

    public serializeAs_TreasureHuntStep(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntStep(input);
    }

    private deserializeAs_TreasureHuntStep(input: ICustomDataInput)
    {

    }

}