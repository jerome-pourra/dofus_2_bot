import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class PaddockMoveItemRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6071;

	public oldCellId: number = 0;
	public newCellId: number = 0;

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
        this.deserializeAs_PaddockMoveItemRequestMessage(input);
    }

    private deserializeAs_PaddockMoveItemRequestMessage(input: ICustomDataInput)
    {
        this._oldCellIdFunc(input);
        this._newCellIdFunc(input);
    }

    private _oldCellIdFunc(input: ICustomDataInput)
    {
        this.oldCellId = input.readVarUhShort();
        if(this.oldCellId < 0 || this.oldCellId > 559)
        {
            throw new Error("Forbidden value (" + this.oldCellId + ") on element of PaddockMoveItemRequestMessage.oldCellId.");
        }
    }

    private _newCellIdFunc(input: ICustomDataInput)
    {
        this.newCellId = input.readVarUhShort();
        if(this.newCellId < 0 || this.newCellId > 559)
        {
            throw new Error("Forbidden value (" + this.newCellId + ") on element of PaddockMoveItemRequestMessage.newCellId.");
        }
    }

}