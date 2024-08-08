import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ObjectGroundRemovedMultipleMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3407;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public cells: Array<number>;

    public constructor()
    {
        super();
        this.cells = Array<number>();
    }

    public getMessageId()
    {
        return ObjectGroundRemovedMultipleMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectGroundRemovedMultipleMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectGroundRemovedMultipleMessage.endpointServer;
    }

    public initObjectGroundRemovedMultipleMessage(cells: Array<number> = null): ObjectGroundRemovedMultipleMessage
    {
        this.cells = cells;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectGroundRemovedMultipleMessage(output);
    }

    public serializeAs_ObjectGroundRemovedMultipleMessage(output: ICustomDataOutput)
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
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectGroundRemovedMultipleMessage(input);
    }

    private deserializeAs_ObjectGroundRemovedMultipleMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
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
    }

}