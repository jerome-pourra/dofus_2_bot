import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameContextCreateRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5527;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameContextCreateRequestMessage.protocolId;
    }

    public initGameContextCreateRequestMessage(): GameContextCreateRequestMessage
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
        this.serializeAs_GameContextCreateRequestMessage(output);
    }

    public serializeAs_GameContextCreateRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameContextCreateRequestMessage(input);
    }

    private deserializeAs_GameContextCreateRequestMessage(input: ICustomDataInput)
    {

    }

}