import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SurrenderResponse } from "./SurrenderResponse";

export class SurrenderRefused extends SurrenderResponse implements INetworkType
{

	public static readonly protocolId: number = 8906;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SurrenderRefused.protocolId;
    }

    public initSurrenderRefused(): SurrenderRefused
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SurrenderRefused(output);
    }

    public serializeAs_SurrenderRefused(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderRefused(input);
    }

    private deserializeAs_SurrenderRefused(input: ICustomDataInput)
    {

    }

}