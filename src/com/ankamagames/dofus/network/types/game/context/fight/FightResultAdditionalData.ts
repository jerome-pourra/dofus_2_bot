import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class FightResultAdditionalData implements INetworkType
{

	public static readonly protocolId: number = 8078;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {

    }

    public getTypeId()
    {
        return FightResultAdditionalData.protocolId;
    }

    public isEndpointClient()
    {
        return FightResultAdditionalData.endpointClient;
    }

    public isEndpointServer()
    {
        return FightResultAdditionalData.endpointServer;
    }

    public initFightResultAdditionalData(): FightResultAdditionalData
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightResultAdditionalData(output);
    }

    public serializeAs_FightResultAdditionalData(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightResultAdditionalData(input);
    }

    private deserializeAs_FightResultAdditionalData(input: ICustomDataInput)
    {

    }

}