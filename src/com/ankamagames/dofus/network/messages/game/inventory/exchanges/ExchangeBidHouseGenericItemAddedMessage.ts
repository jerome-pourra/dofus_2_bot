import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHouseGenericItemAddedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3696;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public objGenericId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeBidHouseGenericItemAddedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeBidHouseGenericItemAddedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeBidHouseGenericItemAddedMessage.endpointServer;
    }

    public initExchangeBidHouseGenericItemAddedMessage(objGenericId: number = 0): ExchangeBidHouseGenericItemAddedMessage
    {
        this.objGenericId = objGenericId;
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
        this.serializeAs_ExchangeBidHouseGenericItemAddedMessage(output);
    }

    public serializeAs_ExchangeBidHouseGenericItemAddedMessage(output: ICustomDataOutput)
    {
        if(this.objGenericId < 0)
        {
            throw new Error("Forbidden value (" + this.objGenericId + ") on element objGenericId.");
        }
        output.writeVarInt(this.objGenericId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeBidHouseGenericItemAddedMessage(input);
    }

    private deserializeAs_ExchangeBidHouseGenericItemAddedMessage(input: ICustomDataInput)
    {
        this._objGenericIdFunc(input);
    }

    private _objGenericIdFunc(input: ICustomDataInput)
    {
        this.objGenericId = input.readVarUhInt();
        if(this.objGenericId < 0)
        {
            throw new Error("Forbidden value (" + this.objGenericId + ") on element of ExchangeBidHouseGenericItemAddedMessage.objGenericId.");
        }
    }

}