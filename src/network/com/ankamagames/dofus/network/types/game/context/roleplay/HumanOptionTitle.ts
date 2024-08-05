import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanOption } from "./HumanOption";

export class HumanOptionTitle extends HumanOption
{

	public static readonly protocolId: number = 2189;

	public titleId: number = 0;
	public titleParam: string = "";

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HumanOptionTitle(input);
    }

    private deserializeAs_HumanOptionTitle(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._titleIdFunc(input);
        this._titleParamFunc(input);
    }

    private _titleIdFunc(input: ICustomDataInput)
    {
        this.titleId = input.readVarUhShort();
        if(this.titleId < 0)
        {
            throw new Error("Forbidden value (" + this.titleId + ") on element of HumanOptionTitle.titleId.");
        }
    }

    private _titleParamFunc(input: ICustomDataInput)
    {
        this.titleParam = input.readUTF();
    }

}