import { ObjectEffect } from "./../../../../types/game/data/items/effects/ObjectEffect";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeBidHouseInListAddedMessage } from "./ExchangeBidHouseInListAddedMessage";

export class ExchangeBidHouseInListUpdatedMessage extends ExchangeBidHouseInListAddedMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9240;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeBidHouseInListUpdatedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeBidHouseInListUpdatedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeBidHouseInListUpdatedMessage.endpointServer;
    }

    public initExchangeBidHouseInListUpdatedMessage(itemUID: number = 0, objectGID: number = 0, objectType: number = 0, effects: Array<ObjectEffect> = null, prices: Array<number> = null): ExchangeBidHouseInListUpdatedMessage
    {
        super.initExchangeBidHouseInListAddedMessage(itemUID,objectGID,objectType,effects,prices);
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
        this.serializeAs_ExchangeBidHouseInListUpdatedMessage(output);
    }

    public serializeAs_ExchangeBidHouseInListUpdatedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeBidHouseInListAddedMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeBidHouseInListUpdatedMessage(input);
    }

    private deserializeAs_ExchangeBidHouseInListUpdatedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}