import { CharacterMinimalInformations } from "./../../../../../../types/game/character/CharacterMinimalInformations";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachInvitationResponseMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9260;

	public guest: CharacterMinimalInformations;
	public accept: boolean = false;

    public constructor()
    {
        super();
        this.guest = new CharacterMinimalInformations();
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
        this.deserializeAs_BreachInvitationResponseMessage(input);
    }

    private deserializeAs_BreachInvitationResponseMessage(input: ICustomDataInput)
    {
        this.guest = new CharacterMinimalInformations();
        this.guest.deserialize(input);
        this._acceptFunc(input);
    }

    private _acceptFunc(input: ICustomDataInput)
    {
        this.accept = input.readBoolean();
    }

}