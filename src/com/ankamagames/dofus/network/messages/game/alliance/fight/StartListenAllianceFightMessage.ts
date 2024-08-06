import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class StartListenAllianceFightMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 448;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return StartListenAllianceFightMessage.protocolId;
    }

    public initStartListenAllianceFightMessage(): StartListenAllianceFightMessage
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
        this.serializeAs_StartListenAllianceFightMessage(output);
    }

    public serializeAs_StartListenAllianceFightMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StartListenAllianceFightMessage(input);
    }

    private deserializeAs_StartListenAllianceFightMessage(input: ICustomDataInput)
    {

    }

}