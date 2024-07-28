import { CharacterMinimalInformations } from "./../../../../../../types/game/character/CharacterMinimalInformations";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class InviteInHavenBagOfferMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5037;

	public hostInformations: CharacterMinimalInformations;
	public timeLeftBeforeCancel: number = 0;

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
        this.deserializeAs_InviteInHavenBagOfferMessage(input);
    }

    private deserializeAs_InviteInHavenBagOfferMessage(input: ICustomDataInput)
    {
        this.hostInformations = new CharacterMinimalInformations();
        this.hostInformations.deserialize(input);
        this._timeLeftBeforeCancelFunc(input);
    }

    private _timeLeftBeforeCancelFunc(input: ICustomDataInput)
    {
        this.timeLeftBeforeCancel = input.readVarInt();
    }

}