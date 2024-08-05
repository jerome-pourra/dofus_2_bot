import { CharacterMinimalInformations } from "./../../../../../../types/game/character/CharacterMinimalInformations";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class InviteInHavenBagClosedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8001;

	public hostInformations: CharacterMinimalInformations;

    public constructor()
    {
        super();
        this.hostInformations = new CharacterMinimalInformations();
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
        this.deserializeAs_InviteInHavenBagClosedMessage(input);
    }

    private deserializeAs_InviteInHavenBagClosedMessage(input: ICustomDataInput)
    {
        this.hostInformations = new CharacterMinimalInformations();
        this.hostInformations.deserialize(input);
    }

}