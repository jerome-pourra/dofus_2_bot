import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeObjectMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3411;

	public remote: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeObjectMessage.protocolId;
    }

    public initExchangeObjectMessage(remote: boolean = false): ExchangeObjectMessage
    {
        this.remote = remote;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangeObjectMessage(output);
    }

    public serializeAs_ExchangeObjectMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.remote);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeObjectMessage(input);
    }

    private deserializeAs_ExchangeObjectMessage(input: ICustomDataInput)
    {
        this._remoteFunc(input);
    }

    private _remoteFunc(input: ICustomDataInput)
    {
        this.remote = input.readBoolean();
    }

}