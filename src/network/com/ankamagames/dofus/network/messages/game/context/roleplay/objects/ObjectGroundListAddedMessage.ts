import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ObjectGroundListAddedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7785;

	public cells: Array<number>;
	public referenceIds: Array<number>;

    public constructor()
    {
        super();
        this.cells = Array<number>();
        this.referenceIds = Array<number>();
    }

    public getMessageId()
    {
        return ObjectGroundListAddedMessage.protocolId;
    }

    public initObjectGroundListAddedMessage(cells: Array<number> = null, referenceIds: Array<number> = null): ObjectGroundListAddedMessage
    {
        this.cells = cells;
        this.referenceIds = referenceIds;
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
        this.serializeAs_ObjectGroundListAddedMessage(output);
    }

    public serializeAs_ObjectGroundListAddedMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.cells.length);
        for(var _i1: number = 0; _i1 < this.cells.length; _i1++)
        {
            if(this.cells[_i1] < 0 || this.cells[_i1] > 559)
            {
                throw new Error("Forbidden value (" + this.cells[_i1] + ") on element 1 (starting at 1) of cells.");
            }
            output.writeVarShort(this.cells[_i1]);
        }
        output.writeShort(this.referenceIds.length);
        for(var _i2: number = 0; _i2 < this.referenceIds.length; _i2++)
        {
            if(this.referenceIds[_i2] < 0)
            {
                throw new Error("Forbidden value (" + this.referenceIds[_i2] + ") on element 2 (starting at 1) of referenceIds.");
            }
            output.writeVarInt(this.referenceIds[_i2]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectGroundListAddedMessage(input);
    }

    private deserializeAs_ObjectGroundListAddedMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _val2: number = 0;
        let _cellsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _cellsLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0 || _val1 > 559)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of cells.");
            }
            this.cells.push(_val1);
        }
        let _referenceIdsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _referenceIdsLen; _i2++)
        {
            _val2 = input.readVarUhInt();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of referenceIds.");
            }
            this.referenceIds.push(_val2);
        }
    }

}