import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeObjectTransfertListWithQuantityToInvMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 166;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public ids: Array<number>;
	public qtys: Array<number>;

    public constructor()
    {
        super();
        this.ids = Array<number>();
        this.qtys = Array<number>();
    }

    public getMessageId()
    {
        return ExchangeObjectTransfertListWithQuantityToInvMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeObjectTransfertListWithQuantityToInvMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeObjectTransfertListWithQuantityToInvMessage.endpointServer;
    }

    public initExchangeObjectTransfertListWithQuantityToInvMessage(ids: Array<number> = null, qtys: Array<number> = null): ExchangeObjectTransfertListWithQuantityToInvMessage
    {
        this.ids = ids;
        this.qtys = qtys;
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
        this.serializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage(output);
    }

    public serializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage(output: ICustomDataOutput)
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
        output.writeShort(this.qtys.length);
        for(var _i2: number = 0; _i2 < this.qtys.length; _i2++)
        {
            if(this.qtys[_i2] < 0)
            {
                throw new Error("Forbidden value (" + this.qtys[_i2] + ") on element 2 (starting at 1) of qtys.");
            }
            output.writeVarInt(this.qtys[_i2]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage(input);
    }

    private deserializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _val2: number = 0;
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
        let _qtysLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _qtysLen; _i2++)
        {
            _val2 = input.readVarUhInt();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of qtys.");
            }
            this.qtys.push(_val2);
        }
    }

}