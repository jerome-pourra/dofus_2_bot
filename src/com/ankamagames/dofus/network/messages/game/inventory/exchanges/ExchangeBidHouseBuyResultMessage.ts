import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHouseBuyResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2613;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public uid: number = 0;
	public bought: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeBidHouseBuyResultMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeBidHouseBuyResultMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeBidHouseBuyResultMessage.endpointServer;
    }

    public initExchangeBidHouseBuyResultMessage(uid: number = 0, bought: boolean = false): ExchangeBidHouseBuyResultMessage
    {
        this.uid = uid;
        this.bought = bought;
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
        this.serializeAs_ExchangeBidHouseBuyResultMessage(output);
    }

    public serializeAs_ExchangeBidHouseBuyResultMessage(output: ICustomDataOutput)
    {
        if(this.uid < 0)
        {
            throw new Error("Forbidden value (" + this.uid + ") on element uid.");
        }
        output.writeVarInt(this.uid);
        output.writeBoolean(this.bought);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeBidHouseBuyResultMessage(input);
    }

    private deserializeAs_ExchangeBidHouseBuyResultMessage(input: ICustomDataInput)
    {
        this._uidFunc(input);
        this._boughtFunc(input);
    }

    private _uidFunc(input: ICustomDataInput)
    {
        this.uid = input.readVarUhInt();
        if(this.uid < 0)
        {
            throw new Error("Forbidden value (" + this.uid + ") on element of ExchangeBidHouseBuyResultMessage.uid.");
        }
    }

    private _boughtFunc(input: ICustomDataInput)
    {
        this.bought = input.readBoolean();
    }

}