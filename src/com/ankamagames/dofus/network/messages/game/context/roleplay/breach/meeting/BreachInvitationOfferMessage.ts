import { CharacterMinimalInformations } from "./../../../../../../types/game/character/CharacterMinimalInformations";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachInvitationOfferMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5842;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public host: CharacterMinimalInformations;
	public timeLeftBeforeCancel: number = 0;

    public constructor()
    {
        super();
        this.host = new CharacterMinimalInformations();
    }

    public getMessageId()
    {
        return BreachInvitationOfferMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BreachInvitationOfferMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BreachInvitationOfferMessage.endpointServer;
    }

    public initBreachInvitationOfferMessage(host: CharacterMinimalInformations = null, timeLeftBeforeCancel: number = 0): BreachInvitationOfferMessage
    {
        this.host = host;
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
        this.serializeAs_BreachInvitationOfferMessage(output);
    }

    public serializeAs_BreachInvitationOfferMessage(output: ICustomDataOutput)
    {
        this.host.serializeAs_CharacterMinimalInformations(output);
        if(this.timeLeftBeforeCancel < 0)
        {
            throw new Error("Forbidden value (" + this.timeLeftBeforeCancel + ") on element timeLeftBeforeCancel.");
        }
        output.writeVarInt(this.timeLeftBeforeCancel);
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