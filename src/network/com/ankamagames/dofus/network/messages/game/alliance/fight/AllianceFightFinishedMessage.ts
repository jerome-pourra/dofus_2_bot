import { SocialFightInfo } from "./../../../../types/game/social/fight/SocialFightInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceFightFinishedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1947;

	public allianceFightInfo: SocialFightInfo;

    public constructor()
    {
        super();
        this.allianceFightInfo = new SocialFightInfo();
    }

    public getMessageId()
    {
        return AllianceFightFinishedMessage.protocolId;
    }

    public initAllianceFightFinishedMessage(allianceFightInfo: SocialFightInfo = null): AllianceFightFinishedMessage
    {
        this.allianceFightInfo = allianceFightInfo;
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
        this.serializeAs_AllianceFightFinishedMessage(output);
    }

    public serializeAs_AllianceFightFinishedMessage(output: ICustomDataOutput)
    {
        this.allianceFightInfo.serializeAs_SocialFightInfo(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceFightFinishedMessage(input);
    }

    private deserializeAs_AllianceFightFinishedMessage(input: ICustomDataInput)
    {
        this.allianceFightInfo = new SocialFightInfo();
        this.allianceFightInfo.deserialize(input);
    }

}