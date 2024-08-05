import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class DebugHighlightCellsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9357;

	public color: number = 0;
	public cells: Array<number>;

    public constructor()
    {
        super();
        this.cells = Array<number>();
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
        this.deserializeAs_DebugHighlightCellsMessage(input);
    }

    private deserializeAs_DebugHighlightCellsMessage(input: ICustomDataInput)
    {
        let _val2: number = 0;
        this._colorFunc(input);
        let _cellsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _cellsLen; _i2++)
        {
            _val2 = input.readVarUhShort();
            if(_val2 < 0 || _val2 > 559)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of cells.");
            }
            this.cells.push(_val2);
        }
    }

    private _colorFunc(input: ICustomDataInput)
    {
        this.color = input.readDouble();
        if(this.color < -9007199254740992 || this.color > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.color + ") on element of DebugHighlightCellsMessage.color.");
        }
    }

}