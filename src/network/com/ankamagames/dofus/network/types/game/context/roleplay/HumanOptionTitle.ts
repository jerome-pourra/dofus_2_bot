import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanOption } from "./HumanOption";

export class HumanOptionTitle extends HumanOption implements INetworkType
{

	public static readonly protocolId: number = 2189;

	public titleId: number = 0;
	public titleParam: string = "";

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return HumanOptionTitle.protocolId;
    }

    public initHumanOptionTitle(titleId: number = 0, titleParam: string = ""): HumanOptionTitle
    {
        this.titleId = titleId;
        this.titleParam = titleParam;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HumanOptionTitle(output);
    }

    public serializeAs_HumanOptionTitle(output: ICustomDataOutput)
    {
        super.serializeAs_HumanOption(output);
        if(this.titleId < 0)
        {
            throw new Error("Forbidden value (" + this.titleId + ") on element titleId.");
        }
        output.writeVarShort(this.titleId);
        output.writeUTF(this.titleParam);
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