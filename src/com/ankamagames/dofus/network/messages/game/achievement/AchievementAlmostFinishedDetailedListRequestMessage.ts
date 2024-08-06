import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementAlmostFinishedDetailedListRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9909;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AchievementAlmostFinishedDetailedListRequestMessage.protocolId;
    }

    public initAchievementAlmostFinishedDetailedListRequestMessage(): AchievementAlmostFinishedDetailedListRequestMessage
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
        this.serializeAs_AchievementAlmostFinishedDetailedListRequestMessage(output);
    }

    public serializeAs_AchievementAlmostFinishedDetailedListRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AchievementAlmostFinishedDetailedListRequestMessage(input);
    }

    private deserializeAs_AchievementAlmostFinishedDetailedListRequestMessage(input: ICustomDataInput)
    {

    }

}