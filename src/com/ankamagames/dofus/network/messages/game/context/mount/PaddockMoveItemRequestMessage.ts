import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class PaddockMoveItemRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6071;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public oldCellId: number = 0;
	public newCellId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PaddockMoveItemRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PaddockMoveItemRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PaddockMoveItemRequestMessage.endpointServer;
    }

    public initPaddockMoveItemRequestMessage(oldCellId: number = 0, newCellId: number = 0): PaddockMoveItemRequestMessage
    {
        this.oldCellId = oldCellId;
        this.newCellId = newCellId;
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
        this.serializeAs_PaddockMoveItemRequestMessage(output);
    }

    public serializeAs_PaddockMoveItemRequestMessage(output: ICustomDataOutput)
    {
        if(this.oldCellId < 0 || this.oldCellId > 559)
        {
            throw new Error("Forbidden value (" + this.oldCellId + ") on element oldCellId.");
        }
        output.writeVarShort(this.oldCellId);
        if(this.newCellId < 0 || this.newCellId > 559)
        {
            throw new Error("Forbidden value (" + this.newCellId + ") on element newCellId.");
        }
        output.writeVarShort(this.newCellId);
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