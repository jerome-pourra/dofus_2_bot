import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeCraftResultMessage } from "./ExchangeCraftResultMessage";

export class ExchangeCraftResultWithObjectIdMessage extends ExchangeCraftResultMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1423;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public objectGenericId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeCraftResultWithObjectIdMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeCraftResultWithObjectIdMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeCraftResultWithObjectIdMessage.endpointServer;
    }

    public initExchangeCraftResultWithObjectIdMessage(craftResult: number = 0, objectGenericId: number = 0): ExchangeCraftResultWithObjectIdMessage
    {
        super.initExchangeCraftResultMessage(craftResult);
        this.objectGenericId = objectGenericId;
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
        this.serializeAs_ExchangeCraftResultWithObjectIdMessage(output);
    }

    public serializeAs_ExchangeCraftResultWithObjectIdMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeCraftResultMessage(output);
        if(this.objectGenericId < 0)
        {
            throw new Error("Forbidden value (" + this.objectGenericId + ") on element objectGenericId.");
        }
        output.writeVarInt(this.objectGenericId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeCraftResultWithObjectIdMessage(input);
    }

    private deserializeAs_ExchangeCraftResultWithObjectIdMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._objectGenericIdFunc(input);
    }

    private _objectGenericIdFunc(input: ICustomDataInput)
    {
        this.objectGenericId = input.readVarUhInt();
        if(this.objectGenericId < 0)
        {
            throw new Error("Forbidden value (" + this.objectGenericId + ") on element of ExchangeCraftResultWithObjectIdMessage.objectGenericId.");
        }
    }

}