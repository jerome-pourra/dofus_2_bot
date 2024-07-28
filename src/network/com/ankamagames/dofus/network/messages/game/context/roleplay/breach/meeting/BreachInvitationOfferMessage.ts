import { CharacterMinimalInformations } from "./../../../../../../types/game/character/CharacterMinimalInformations";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachInvitationOfferMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5842;

	public host: CharacterMinimalInformations;
	public timeLeftBeforeCancel: number = 0;

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
        this.deserializeAs_BreachInvitationOfferMessage(input);
    }

    private deserializeAs_BreachInvitationOfferMessage(input: ICustomDataInput)
    {
        this.host = new CharacterMinimalInformations();
        this.host.deserialize(input);
        this._timeLeftBeforeCancelFunc(input);
    }

    private _timeLeftBeforeCancelFunc(input: ICustomDataInput)
    {
        this.timeLeftBeforeCancel = input.readVarUhInt();
        if(this.timeLeftBeforeCancel < 0)
        {
            throw new Error("Forbidden value (" + this.timeLeftBeforeCancel + ") on element of BreachInvitationOfferMessage.timeLeftBeforeCancel.");
        }
    }

}