import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeObjectTransfertListFromInvMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7537;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public ids: Array<number>;

    public constructor()
    {
        super();
        this.ids = Array<number>();
    }

    public getMessageId()
    {
        return ExchangeObjectTransfertListFromInvMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeObjectTransfertListFromInvMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeObjectTransfertListFromInvMessage.endpointServer;
    }

    public initExchangeObjectTransfertListFromInvMessage(ids: Array<number> = null): ExchangeObjectTransfertListFromInvMessage
    {
        this.ids = ids;
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
        this.serializeAs_ExchangeObjectTransfertListFromInvMessage(output);
    }

    public serializeAs_ExchangeObjectTransfertListFromInvMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.ids.length);
        for(var _i1: number = 0; _i1 < this.ids.length; _i1++)
        {
            if(this.ids[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.ids[_i1] + ") on element 1 (starting at 1) of ids.");
            }
            output.writeVarInt(this.ids[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeObjectTransfertListFromInvMessage(input);
    }

    private deserializeAs_ExchangeObjectTransfertListFromInvMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _idsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _idsLen; _i1++)
        {
            _val1 = input.readVarUhInt();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of ids.");
            }
            this.ids.push(_val1);
        }
    }

}