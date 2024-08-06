import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class StopListenNuggetsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4818;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return StopListenNuggetsMessage.protocolId;
    }

    public initStopListenNuggetsMessage(): StopListenNuggetsMessage
    {
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
        this.serializeAs_StopListenNuggetsMessage(output);
    }

    public serializeAs_StopListenNuggetsMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StopListenNuggetsMessage(input);
    }

    private deserializeAs_StopListenNuggetsMessage(input: ICustomDataInput)
    {

    }

}