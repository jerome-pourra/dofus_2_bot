import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class DungeonPartyFinderAvailableDungeonsRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9426;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return DungeonPartyFinderAvailableDungeonsRequestMessage.protocolId;
    }

    public initDungeonPartyFinderAvailableDungeonsRequestMessage(): DungeonPartyFinderAvailableDungeonsRequestMessage
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
        this.serializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage(output);
    }

    public serializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage(input);
    }

    private deserializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage(input: ICustomDataInput)
    {

    }

}