import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ReleaseAccountMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3259;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ReleaseAccountMessage.protocolId;
    }

    public initReleaseAccountMessage(): ReleaseAccountMessage
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
        this.serializeAs_ReleaseAccountMessage(output);
    }

    public serializeAs_ReleaseAccountMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ReleaseAccountMessage(input);
    }

    private deserializeAs_ReleaseAccountMessage(input: ICustomDataInput)
    {

    }

}