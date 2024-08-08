import { CharacterMinimalInformations } from "./../../../../../../types/game/character/CharacterMinimalInformations";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class InviteInHavenBagOfferMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5037;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public hostInformations: CharacterMinimalInformations;
	public timeLeftBeforeCancel: number = 0;

    public constructor()
    {
        super();
        this.hostInformations = new CharacterMinimalInformations();
    }

    public getMessageId()
    {
        return InviteInHavenBagOfferMessage.protocolId;
    }

    public isEndpointClient()
    {
        return InviteInHavenBagOfferMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return InviteInHavenBagOfferMessage.endpointServer;
    }

    public initInviteInHavenBagOfferMessage(hostInformations: CharacterMinimalInformations = null, timeLeftBeforeCancel: number = 0): InviteInHavenBagOfferMessage
    {
        this.hostInformations = hostInformations;
        this.timeLeftBeforeCancel = timeLeftBeforeCancel;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_InviteInHavenBagOfferMessage(output);
    }

    public serializeAs_InviteInHavenBagOfferMessage(output: ICustomDataOutput)
    {
        this.hostInformations.serializeAs_CharacterMinimalInformations(output);
        output.writeVarInt(this.timeLeftBeforeCancel);
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