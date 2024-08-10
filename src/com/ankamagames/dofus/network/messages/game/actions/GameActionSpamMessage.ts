import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameActionSpamMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9805;

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
        return GameActionSpamMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionSpamMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionSpamMessage.endpointServer;
    }

    public initGameActionSpamMessage(cells: Array<number> = null): GameActionSpamMessage
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
        this.serializeAs_GameActionSpamMessage(output);
    }

    public serializeAs_GameActionSpamMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.cells.length);
        for(var _i1: number = 0; _i1 < this.cells.length; _i1++)
        {
            output.writeShort(this.cells[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionSpamMessage(input);
    }

    private deserializeAs_GameActionSpamMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _cellsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _cellsLen; _i1++)
        {
            _val1 = input.readShort();
            this.cells.push(_val1);
        }
    }

}