import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHouseTypeMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8802;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public type: number = 0;
	public follow: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeBidHouseTypeMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeBidHouseTypeMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeBidHouseTypeMessage.endpointServer;
    }

    public initExchangeBidHouseTypeMessage(type: number = 0, follow: boolean = false): ExchangeBidHouseTypeMessage
    {
        this.type = type;
        this.follow = follow;
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
        this.serializeAs_ExchangeBidHouseTypeMessage(output);
    }

    public serializeAs_ExchangeBidHouseTypeMessage(output: ICustomDataOutput)
    {
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element type.");
        }
        output.writeVarInt(this.type);
        output.writeBoolean(this.follow);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeBidHouseTypeMessage(input);
    }

    private deserializeAs_ExchangeBidHouseTypeMessage(input: ICustomDataInput)
    {
        this._typeFunc(input);
        this._followFunc(input);
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readVarUhInt();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of ExchangeBidHouseTypeMessage.type.");
        }
    }

    private _followFunc(input: ICustomDataInput)
    {
        this.follow = input.readBoolean();
    }

}