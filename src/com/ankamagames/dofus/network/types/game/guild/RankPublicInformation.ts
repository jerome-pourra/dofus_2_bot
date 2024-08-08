import { RankMinimalInformation } from "./../rank/RankMinimalInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class RankPublicInformation extends RankMinimalInformation implements INetworkType
{

	public static readonly protocolId: number = 5787;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public order: number = 0;
	public gfxId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return RankPublicInformation.protocolId;
    }

    public isEndpointClient()
    {
        return RankPublicInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return RankPublicInformation.endpointServer;
    }

    public initRankPublicInformation(id: number = 0, name: string = "", order: number = 0, gfxId: number = 0): RankPublicInformation
    {
        super.initRankMinimalInformation(id,name);
        this.order = order;
        this.gfxId = gfxId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_RankPublicInformation(output);
    }

    public serializeAs_RankPublicInformation(output: ICustomDataOutput)
    {
        super.serializeAs_RankMinimalInformation(output);
        if(this.order < 0)
        {
            throw new Error("Forbidden value (" + this.order + ") on element order.");
        }
        output.writeVarInt(this.order);
        if(this.gfxId < 0)
        {
            throw new Error("Forbidden value (" + this.gfxId + ") on element gfxId.");
        }
        output.writeVarInt(this.gfxId);
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