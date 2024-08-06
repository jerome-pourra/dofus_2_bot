import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class AbstractSocialGroupInfos implements INetworkType
{

	public static readonly protocolId: number = 6837;

    public constructor()
    {

    }

    public getTypeId()
    {
        return AbstractSocialGroupInfos.protocolId;
    }

    public initAbstractSocialGroupInfos(): AbstractSocialGroupInfos
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AbstractSocialGroupInfos(output);
    }

    public serializeAs_AbstractSocialGroupInfos(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AbstractSocialGroupInfos(input);
    }

    private deserializeAs_AbstractSocialGroupInfos(input: ICustomDataInput)
    {

    }

}