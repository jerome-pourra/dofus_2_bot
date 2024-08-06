import { CharacterMinimalInformations } from "./../../../../../../types/game/character/CharacterMinimalInformations";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachInvitationCloseMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6049;

	public host: CharacterMinimalInformations;

    public constructor()
    {
        super();
        this.host = new CharacterMinimalInformations();
    }

    public getMessageId()
    {
        return BreachInvitationCloseMessage.protocolId;
    }

    public initBreachInvitationCloseMessage(host: CharacterMinimalInformations = null): BreachInvitationCloseMessage
    {
        this.host = host;
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
        this.serializeAs_BreachInvitationCloseMessage(output);
    }

    public serializeAs_BreachInvitationCloseMessage(output: ICustomDataOutput)
    {
        this.host.serializeAs_CharacterMinimalInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachInvitationCloseMessage(input);
    }

    private deserializeAs_BreachInvitationCloseMessage(input: ICustomDataInput)
    {
        this.host = new CharacterMinimalInformations();
        this.host.deserialize(input);
    }

}