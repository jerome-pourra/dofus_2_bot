import { AllianceInformation } from "./../../../../types/game/context/roleplay/AllianceInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceApplicationIsAnsweredMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4844;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public accepted: boolean = false;
	public allianceInformation: AllianceInformation;

    public constructor()
    {
        super();
        this.allianceInformation = new AllianceInformation();
    }

    public getMessageId()
    {
        return AllianceApplicationIsAnsweredMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceApplicationIsAnsweredMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceApplicationIsAnsweredMessage.endpointServer;
    }

    public initAllianceApplicationIsAnsweredMessage(accepted: boolean = false, allianceInformation: AllianceInformation = null): AllianceApplicationIsAnsweredMessage
    {
        this.accepted = accepted;
        this.allianceInformation = allianceInformation;
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
        this.serializeAs_AllianceApplicationIsAnsweredMessage(output);
    }

    public serializeAs_AllianceApplicationIsAnsweredMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.accepted);
        this.allianceInformation.serializeAs_AllianceInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceApplicationIsAnsweredMessage(input);
    }

    private deserializeAs_AllianceApplicationIsAnsweredMessage(input: ICustomDataInput)
    {
        this._acceptedFunc(input);
        this.allianceInformation = new AllianceInformation();
        this.allianceInformation.deserialize(input);
    }

    private _acceptedFunc(input: ICustomDataInput)
    {
        this.accepted = input.readBoolean();
    }

}