import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class KothWinner implements INetworkType
{

	public static readonly protocolId: number = 4121;

    public constructor()
    {

    }

    public getTypeId()
    {
        return KothWinner.protocolId;
    }

    public initKothWinner(): KothWinner
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_KothWinner(output);
    }

    public serializeAs_KothWinner(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_KothWinner(input);
    }

    private deserializeAs_KothWinner(input: ICustomDataInput)
    {

    }

}