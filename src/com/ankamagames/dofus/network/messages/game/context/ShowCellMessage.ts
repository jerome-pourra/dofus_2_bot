import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ShowCellMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9194;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public sourceId: number = 0;
	public cellId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ShowCellMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ShowCellMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ShowCellMessage.endpointServer;
    }

    public initShowCellMessage(sourceId: number = 0, cellId: number = 0): ShowCellMessage
    {
        this.sourceId = sourceId;
        this.cellId = cellId;
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
        this.serializeAs_ShowCellMessage(output);
    }

    public serializeAs_ShowCellMessage(output: ICustomDataOutput)
    {
        if(this.sourceId < -9007199254740992 || this.sourceId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sourceId + ") on element sourceId.");
        }
        output.writeDouble(this.sourceId);
        if(this.cellId < 0 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
        }
        output.writeVarShort(this.cellId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ShowCellMessage(input);
    }

    private deserializeAs_ShowCellMessage(input: ICustomDataInput)
    {
        this._sourceIdFunc(input);
        this._cellIdFunc(input);
    }

    private _sourceIdFunc(input: ICustomDataInput)
    {
        this.sourceId = input.readDouble();
        if(this.sourceId < -9007199254740992 || this.sourceId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sourceId + ") on element of ShowCellMessage.sourceId.");
        }
    }

    private _cellIdFunc(input: ICustomDataInput)
    {
        this.cellId = input.readVarUhShort();
        if(this.cellId < 0 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element of ShowCellMessage.cellId.");
        }
    }

}