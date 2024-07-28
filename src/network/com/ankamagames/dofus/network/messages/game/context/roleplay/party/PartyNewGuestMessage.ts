import { PartyGuestInformations } from "./../../../../../types/game/context/roleplay/party/PartyGuestInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyEventMessage } from "./AbstractPartyEventMessage";

export class PartyNewGuestMessage extends AbstractPartyEventMessage
{

	public static readonly protocolId: number = 7060;

	public guest: PartyGuestInformations;

    public constructor()
    {
        super();
        this.guest = new PartyGuestInformations();
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
        this.deserializeAs_PartyNewGuestMessage(input);
    }

    private deserializeAs_PartyNewGuestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.guest = new PartyGuestInformations();
        this.guest.deserialize(input);
    }

}