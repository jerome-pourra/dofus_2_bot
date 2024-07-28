import { CharacterMinimalInformations } from "./../../../../../../types/game/character/CharacterMinimalInformations";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachInvitationCloseMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6049;

	public host: CharacterMinimalInformations;

    public constructor()
    {
        super();
        this.host = new CharacterMinimalInformations();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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