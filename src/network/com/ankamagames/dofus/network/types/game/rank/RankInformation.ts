import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { RankMinimalInformation } from "./RankMinimalInformation";

export class RankInformation extends RankMinimalInformation
{

	public static readonly protocolId: number = 3538;

	public order: number = 0;
	public gfxId: number = 0;
	public modifiable: boolean = false;
	public rights: Array<number>;

    public constructor()
    {
        super();
        this.rights = Array<number>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_RankInformation(input);
    }

    private deserializeAs_RankInformation(input: ICustomDataInput)
    {
        let _val4: number = 0;
        super.deserialize(input);
        this._orderFunc(input);
        this._gfxIdFunc(input);
        this._modifiableFunc(input);
        let _rightsLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _rightsLen; _i4++)
        {
            _val4 = input.readVarUhInt();
            if(_val4 < 0)
            {
                throw new Error("Forbidden value (" + _val4 + ") on elements of rights.");
            }
            this.rights.push(_val4);
        }
    }

    private _orderFunc(input: ICustomDataInput)
    {
        this.order = input.readVarUhInt();
        if(this.order < 0)
        {
            throw new Error("Forbidden value (" + this.order + ") on element of RankInformation.order.");
        }
    }

    private _gfxIdFunc(input: ICustomDataInput)
    {
        this.gfxId = input.readVarUhInt();
        if(this.gfxId < 0)
        {
            throw new Error("Forbidden value (" + this.gfxId + ") on element of RankInformation.gfxId.");
        }
    }

    private _modifiableFunc(input: ICustomDataInput)
    {
        this.modifiable = input.readBoolean();
    }

}