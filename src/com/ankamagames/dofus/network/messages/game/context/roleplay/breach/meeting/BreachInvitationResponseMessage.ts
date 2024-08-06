import { CharacterMinimalInformations } from "./../../../../../../types/game/character/CharacterMinimalInformations";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachInvitationResponseMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9260;

	public guest: CharacterMinimalInformations;
	public accept: boolean = false;

    public constructor()
    {
        super();
        this.guest = new CharacterMinimalInformations();
    }

    public getMessageId()
    {
        return BreachInvitationResponseMessage.protocolId;
    }

    public initBreachInvitationResponseMessage(guest: CharacterMinimalInformations = null, accept: boolean = false): BreachInvitationResponseMessage
    {
        this.guest = guest;
        this.accept = accept;
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
        this.serializeAs_BreachInvitationResponseMessage(output);
    }

    public serializeAs_BreachInvitationResponseMessage(output: ICustomDataOutput)
    {
        this.guest.serializeAs_CharacterMinimalInformations(output);
        output.writeBoolean(this.accept);
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