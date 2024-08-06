import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ArenaFighterIdleMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1701;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ArenaFighterIdleMessage.protocolId;
    }

    public initArenaFighterIdleMessage(): ArenaFighterIdleMessage
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
        this.serializeAs_ArenaFighterIdleMessage(output);
    }

    public serializeAs_ArenaFighterIdleMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ArenaFighterIdleMessage(input);
    }

    private deserializeAs_ArenaFighterIdleMessage(input: ICustomDataInput)
    {

    }

}