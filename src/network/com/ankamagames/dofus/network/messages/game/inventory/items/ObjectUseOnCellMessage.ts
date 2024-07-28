import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ObjectUseMessage } from "./ObjectUseMessage";

export class ObjectUseOnCellMessage extends ObjectUseMessage
{

	public static readonly protocolId: number = 4046;

	public cells: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectUseOnCellMessage(input);
    }

    private deserializeAs_ObjectUseOnCellMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._cellsFunc(input);
    }

    private _cellsFunc(input: ICustomDataInput)
    {
        this.cells = input.readVarUhShort();
        if(this.cells < 0 || this.cells > 559)
        {
            throw new Error("Forbidden value (" + this.cells + ") on element of ObjectUseOnCellMessage.cells.");
        }
    }

}