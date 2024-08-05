import { RankMinimalInformation } from "./../rank/RankMinimalInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class RankPublicInformation extends RankMinimalInformation
{

	public static readonly protocolId: number = 5787;

	public order: number = 0;
	public gfxId: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_RankPublicInformation(input);
    }

    private deserializeAs_RankPublicInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._orderFunc(input);
        this._gfxIdFunc(input);
    }

    private _orderFunc(input: ICustomDataInput)
    {
        this.order = input.readVarUhInt();
        if(this.order < 0)
        {
            throw new Error("Forbidden value (" + this.order + ") on element of RankPublicInformation.order.");
        }
    }

    private _gfxIdFunc(input: ICustomDataInput)
    {
        this.gfxId = input.readVarUhInt();
        if(this.gfxId < 0)
        {
            throw new Error("Forbidden value (" + this.gfxId + ") on element of RankPublicInformation.gfxId.");
        }
    }

}