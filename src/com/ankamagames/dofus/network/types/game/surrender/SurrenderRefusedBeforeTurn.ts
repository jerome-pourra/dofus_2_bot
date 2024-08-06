import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SurrenderRefused } from "./SurrenderRefused";

export class SurrenderRefusedBeforeTurn extends SurrenderRefused implements INetworkType
{

	public static readonly protocolId: number = 9548;

	public minTurnForSurrender: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SurrenderRefusedBeforeTurn.protocolId;
    }

    public initSurrenderRefusedBeforeTurn(minTurnForSurrender: number = 0): SurrenderRefusedBeforeTurn
    {
        this.minTurnForSurrender = minTurnForSurrender;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SurrenderRefusedBeforeTurn(output);
    }

    public serializeAs_SurrenderRefusedBeforeTurn(output: ICustomDataOutput)
    {
        super.serializeAs_SurrenderRefused(output);
        output.writeInt(this.minTurnForSurrender);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderRefusedBeforeTurn(input);
    }

    private deserializeAs_SurrenderRefusedBeforeTurn(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._minTurnForSurrenderFunc(input);
    }

    private _minTurnForSurrenderFunc(input: ICustomDataInput)
    {
        this.minTurnForSurrender = input.readInt();
    }

}