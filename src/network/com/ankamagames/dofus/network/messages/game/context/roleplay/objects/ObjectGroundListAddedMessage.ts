import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ObjectGroundListAddedMessage extends NetworkMessage
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

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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