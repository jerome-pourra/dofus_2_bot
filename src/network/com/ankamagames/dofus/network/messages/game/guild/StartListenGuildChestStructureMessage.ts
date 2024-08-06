import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class StartListenGuildChestStructureMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9892;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return StartListenGuildChestStructureMessage.protocolId;
    }

    public initStartListenGuildChestStructureMessage(): StartListenGuildChestStructureMessage
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
        this.serializeAs_StartListenGuildChestStructureMessage(output);
    }

    public serializeAs_StartListenGuildChestStructureMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StartListenGuildChestStructureMessage(input);
    }

    private deserializeAs_StartListenGuildChestStructureMessage(input: ICustomDataInput)
    {

    }

}