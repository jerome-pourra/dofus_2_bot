import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class PaddockRemoveItemRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2191;

	public cellId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PaddockRemoveItemRequestMessage.protocolId;
    }

    public initPaddockRemoveItemRequestMessage(cellId: number = 0): PaddockRemoveItemRequestMessage
    {
        this.cellId = cellId;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PaddockRemoveItemRequestMessage(output);
    }

    public serializeAs_PaddockRemoveItemRequestMessage(output: ICustomDataOutput)
    {
        if(this.cellId < 0 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
        }
        output.writeVarShort(this.cellId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaddockRemoveItemRequestMessage(input);
    }

    private deserializeAs_PaddockRemoveItemRequestMessage(input: ICustomDataInput)
    {
        this._cellIdFunc(input);
    }

    private _cellIdFunc(input: ICustomDataInput)
    {
        this.cellId = input.readVarUhShort();
        if(this.cellId < 0 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element of PaddockRemoveItemRequestMessage.cellId.");
        }
    }

}