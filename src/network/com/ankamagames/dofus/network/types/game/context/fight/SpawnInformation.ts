import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class SpawnInformation implements INetworkType
{

	public static readonly protocolId: number = 339;

    public constructor()
    {

    }

    public getTypeId()
    {
        return SpawnInformation.protocolId;
    }

    public initSpawnInformation(): SpawnInformation
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SpawnInformation(output);
    }

    public serializeAs_SpawnInformation(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SpawnInformation(input);
    }

    private deserializeAs_SpawnInformation(input: ICustomDataInput)
    {

    }

}