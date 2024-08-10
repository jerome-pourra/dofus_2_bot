import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeHandleMountsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3319;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public actionType: number = 0;
	public ridesId: Array<number>;

    public constructor()
    {
        super();
        this.ridesId = Array<number>();
    }

    public getMessageId()
    {
        return ExchangeHandleMountsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeHandleMountsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeHandleMountsMessage.endpointServer;
    }

    public initExchangeHandleMountsMessage(actionType: number = 0, ridesId: Array<number> = null): ExchangeHandleMountsMessage
    {
        this.actionType = actionType;
        this.ridesId = ridesId;
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
        this.serializeAs_ExchangeHandleMountsMessage(output);
    }

    public serializeAs_ExchangeHandleMountsMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.actionType);
        output.writeShort(this.ridesId.length);
        for(var _i2: number = 0; _i2 < this.ridesId.length; _i2++)
        {
            if(this.ridesId[_i2] < 0)
            {
                throw new Error("Forbidden value (" + this.ridesId[_i2] + ") on element 2 (starting at 1) of ridesId.");
            }
            output.writeVarInt(this.ridesId[_i2]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeHandleMountsMessage(input);
    }

    private deserializeAs_ExchangeHandleMountsMessage(input: ICustomDataInput)
    {
        let _val2: number = 0;
        this._actionTypeFunc(input);
        let _ridesIdLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _ridesIdLen; _i2++)
        {
            _val2 = input.readVarUhInt();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of ridesId.");
            }
            this.ridesId.push(_val2);
        }
    }

    private _actionTypeFunc(input: ICustomDataInput)
    {
        this.actionType = input.readByte();
    }

}