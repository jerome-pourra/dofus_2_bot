import { CharacterMinimalInformations } from "./../../../../../../types/game/character/CharacterMinimalInformations";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class InviteInHavenBagMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 949;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public guestInformations: CharacterMinimalInformations;
	public accept: boolean = false;

    public constructor()
    {
        super();
        this.guestInformations = new CharacterMinimalInformations();
    }

    public getMessageId()
    {
        return InviteInHavenBagMessage.protocolId;
    }

    public isEndpointClient()
    {
        return InviteInHavenBagMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return InviteInHavenBagMessage.endpointServer;
    }

    public initInviteInHavenBagMessage(guestInformations: CharacterMinimalInformations = null, accept: boolean = false): InviteInHavenBagMessage
    {
        this.guestInformations = guestInformations;
        this.accept = accept;
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
        this.serializeAs_InviteInHavenBagMessage(output);
    }

    public serializeAs_InviteInHavenBagMessage(output: ICustomDataOutput)
    {
        this.guestInformations.serializeAs_CharacterMinimalInformations(output);
        output.writeBoolean(this.accept);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_InviteInHavenBagMessage(input);
    }

    private deserializeAs_InviteInHavenBagMessage(input: ICustomDataInput)
    {
        this.guestInformations = new CharacterMinimalInformations();
        this.guestInformations.deserialize(input);
        this._acceptFunc(input);
    }

    private _acceptFunc(input: ICustomDataInput)
    {
        this.accept = input.readBoolean();
    }

}