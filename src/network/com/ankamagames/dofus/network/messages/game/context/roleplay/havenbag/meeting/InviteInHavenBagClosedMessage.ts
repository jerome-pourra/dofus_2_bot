import { CharacterMinimalInformations } from "./../../../../../../types/game/character/CharacterMinimalInformations";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class InviteInHavenBagClosedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8001;

	public hostInformations: CharacterMinimalInformations;

    public constructor()
    {
        super();
        this.hostInformations = new CharacterMinimalInformations();
    }

    public getMessageId()
    {
        return InviteInHavenBagClosedMessage.protocolId;
    }

    public initInviteInHavenBagClosedMessage(hostInformations: CharacterMinimalInformations = null): InviteInHavenBagClosedMessage
    {
        this.hostInformations = hostInformations;
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
        this.serializeAs_InviteInHavenBagClosedMessage(output);
    }

    public serializeAs_InviteInHavenBagClosedMessage(output: ICustomDataOutput)
    {
        this.hostInformations.serializeAs_CharacterMinimalInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_InviteInHavenBagClosedMessage(input);
    }

    private deserializeAs_InviteInHavenBagClosedMessage(input: ICustomDataInput)
    {
        this.hostInformations = new CharacterMinimalInformations();
        this.hostInformations.deserialize(input);
    }

}