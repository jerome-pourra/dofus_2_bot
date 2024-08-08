import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ObjectUseMessage } from "./ObjectUseMessage";

export class ObjectUseOnCellMessage extends ObjectUseMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4046;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public cells: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ObjectUseOnCellMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectUseOnCellMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectUseOnCellMessage.endpointServer;
    }

    public initObjectUseOnCellMessage(objectUID: number = 0, cells: number = 0): ObjectUseOnCellMessage
    {
        super.initObjectUseMessage(objectUID);
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
        this.serializeAs_ObjectUseOnCellMessage(output);
    }

    public serializeAs_ObjectUseOnCellMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectUseMessage(output);
        if(this.cells < 0 || this.cells > 559)
        {
            throw new Error("Forbidden value (" + this.cells + ") on element cells.");
        }
        output.writeVarShort(this.cells);
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