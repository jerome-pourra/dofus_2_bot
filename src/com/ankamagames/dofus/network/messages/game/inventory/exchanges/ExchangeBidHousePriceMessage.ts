import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHousePriceMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1454;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public objectGID: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeBidHousePriceMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeBidHousePriceMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeBidHousePriceMessage.endpointServer;
    }

    public initExchangeBidHousePriceMessage(objectGID: number = 0): ExchangeBidHousePriceMessage
    {
        this.objectGID = objectGID;
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
        this.serializeAs_ExchangeBidHousePriceMessage(output);
    }

    public serializeAs_ExchangeBidHousePriceMessage(output: ICustomDataOutput)
    {
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
        }
        output.writeVarInt(this.objectGID);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeBidHousePriceMessage(input);
    }

    private deserializeAs_ExchangeBidHousePriceMessage(input: ICustomDataInput)
    {
        this._objectGIDFunc(input);
    }

    private _objectGIDFunc(input: ICustomDataInput)
    {
        this.objectGID = input.readVarUhInt();
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of ExchangeBidHousePriceMessage.objectGID.");
        }
    }

}